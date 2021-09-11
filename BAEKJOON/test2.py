from itertools import combinations

def solution(orders, course):
    now_set = []
    order = []
    for i in orders:
        i = list(i)
        i.sort()
        order.append(i)
        
    answer = []
    n = len(order)
    l = course[0]
    print(order)
    for i in range(n - 1):
        std = order[i]
        print(std)
        if len(std) < l:
            continue
        
        for menu in combinations(std, l):
            added = False
            check = []
            menu = list(menu)
            if menu in answer:
                continue
                
            for j in range(i + 1, n):
                for food in menu:
                    if food not in order[j]:
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
        print(now_set)
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
                    new_menu = list(new_menu) + last_menu
                    new_menu.sort()
                    added = False
                    check = []
                    if new_menu in answer:
                        continue

                    for j in range(i + 1, length):
                        jdx = last[j]
                        std_2 = order[jdx]
                        for food in new_menu:
                            if food not in std_2:
                                break
                        else:
                            if added:
                                check.append(jdx)
                            else:
                                check.extend([list(new_menu), idx, jdx])
                                answer.append(new_menu)
                                added = True
                                if new_menu == ['A','B','C']:
                                    print(idx,jdx,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', last)
                    if check:
                        new_set.append(check)
        
        if new_set:
            now_set = new_set
        
        if not now_set:
            break
    ans = []
    for i in answer:
        ''.join(i)
        ans.append(i)
    print(ans)
    ans.sort()
    return 'done', ans

a = list(input().split())
b = list(map(int,input().split()))

print(solution(a, b))

