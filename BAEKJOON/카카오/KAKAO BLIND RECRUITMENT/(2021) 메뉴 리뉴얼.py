from itertools import combinations

def solution(orders, course):
    
    n = len(orders)
    for i in range(n):
        orders[i] = sorted(list(orders[i]))
        
    answer = []
    
    now_set = [[[]] + [i for i in range(n)]]
    for l in course:
        new_set = []        
        maxi = 0
        ap = []
        visited = []
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
                    added = 0
                    check = []
                    if new_menu in visited:
                        continue

                    visited.append(new_menu)
                    for j in range(i + 1, length):
                        jdx = last[j]
                        std_2 = orders[jdx]
                        if len(std_2) < l:
                            continue
                        for food in new_menu:
                            if food not in std_2:
                                break
                        else:
                            if added:
                                check.append(jdx)
                            else:
                                check.extend([list(new_menu), idx, jdx])
                            added += 1
                    if added:
                        new_set.append(check)
                        if maxi < added:
                            maxi = added
                            ap = [''.join(new_menu)]
                        elif maxi == added:
                            ap.append(''.join(new_menu))
                            
        if new_set:
            now_set = new_set
            answer += ap

        if not now_set:
            break

        answer.sort()
    return answer
print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))