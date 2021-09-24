'''
    for i in range(n - 1):
        std = orders[i]
        
        if len(std) < l:
            continue
            
        for menu in combinations(std):
            added = False
            check = []
            if menu in answer:
                continue
                
            for j in range(i + 1, n):
                for food in menu:
                    if food not in orders[j]:
                        break
                else:
                    if added:
                        check.append(j)
                    else:
                        check.extend([list(menu), i, j])
                        answer.append(menu)
            
            if check:
                now_set.append(check)
    print(now_set)
    for l in course:
        new_set = []
        for last in now_set:
            last_menu = last[0]
            addition = l - len(last_menu)
            length = len(last)
            for i in range(1, length - 1):
                idx = last[i]
                std = order[idx].copy()
                if len(std) < l:
                    continue
                for f in last_menu:
                    std.remove(f)
                for new_menu in combinations(std, addition):
                    new_menu += last_menu
                    added = False
                    check = []
                    if new_menu in answer:
                        continue

                    for j in range(i + 1, length):
                        jdx = last[j]
                        std_2 = orders[jdx]
                        for food in menu:
                            if food not in std_2:
                                break
                        else:
                            if added:
                                check.append(jdx)
                            else:
                                check.extend([list(new_menu), idx, jdx])
                                answer.append(new_menu)
                    if check:
                        new_set.append(check)
        
        if new_set:
            now_set = new_set
        
        if not now_set:
            break
    
    return'''


from itertools import combinations

def solution(orders, course):
    now_set = []
    
    n = len(orders)
    for i in range(n):
        orders[i] = list(orders[i])

    answer = []
    
    l = course[0]
    
    for i in range(n - 1):
        std = orders[i]
        
        if len(std) < l:
            continue
            
        for menu in combinations(std, l):
            added = False
            check = []
            if menu in answer:
                continue
                
            for j in range(i + 1, n):
                for food in menu:
                    if food not in orders[j]:
                        break
                else:
                    if added:
                        check.append(j)
                    else:
                        check.extend([list(menu), i, j])
                        answer.append(menu)
                        added = True
            
            if check:
                now_set.append(check)
    
    for l in course:
        new_set = []
        for last in now_set:
            last_menu = last[0]
            addition = l - len(last_menu)
            length = len(last)
            for i in range(1, length - 1):
                idx = last[i]
                std = orders[idx].copy()
                if len(std) < l:
                    continue
                for f in last_menu:
                    std.remove(f)
                for new_menu in combinations(std, addition):
                    new_menu = list(new_menu) + last_menu
                    new_menu.sort()
                    added = False
                    check = []
                    if new_menu in answer:
                        continue

                    for j in range(i + 1, length):
                        print(last[j])
                        jdx = last[j]
                        std_2 = orders[jdx]
                        for food in menu:
                            if food not in std_2:
                                break
                        else:
                            if added:
                                check.append(jdx)
                            else:
                                check.extend([list(new_menu), idx, jdx])
                                answer.append(new_menu)
                    if check:
                        new_set.append(check)
        
        if new_set:
            now_set = new_set
        
        if not now_set:
            break
    
    return answer

























print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))