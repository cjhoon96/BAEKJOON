from collections import deque

def solution(n, m, x, y, queries):
    start = set()
    l = len(queries)
    queue = deque([[x, y, 1]])
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    while queue:
        n_x, n_y, ord = queue.popleft()
        w, d = queries[-ord]

        print(n_x, n_y, ord, w, d)
        print(start)
        if n_x == n - 1 and w == 3:
            for i in range(d + 1):
                new_x = n_x - i
                if new_x >= 0:
                    if ord == l:
                        start.add(tuple([new_x, n_y]))
                    else:
                        next = [new_x, n_y, ord + 1]
                        if next not in queue:
                            queue.append(next)
                else:
                    break


        elif n_x == 0 and w == 2:
            for i in range(d + 1):
                new_x = n_x + i
                if new_x < n:
                    if ord == l:
                        start.add(tuple([new_x, n_y]))
                    else:
                        next = [new_x, n_y, ord + 1]
                        if next not in queue:
                            queue.append(next)
                else:
                    break


        if n_y == m - 1 and w == 1:
            for i in range(d + 1):
                new_y = n_y - i
                if new_y >= 0:
                    if ord == l:
                        start.add(tuple([n_x, new_y]))
                    else:
                        next = [n_x, new_y, ord + 1]
                        if next not in queue:
                            queue.append(next)
                else:
                    break


        elif n_y == 0 and w == 0:
            print('야스')
            for i in range(d + 1):
                new_y = n_y + i
                print(x, new_y)
                if new_y < m:
                    if ord == l:
                        start.add(tuple([n_x, new_y]))
                    else:
                        next = [n_x, new_y, ord + 1]
                        if next not in queue:
                            queue.append(next)
                else:
                    break
                
        else:
            new_x = n_x + dx[w] * d
            new_y = n_y + dy[w] * d
            if 0 <= new_x < n and 0 <= new_y < m:
                if ord == l:
                    start.add(tuple([new_x, new_y]))
                else:
                    next = [new_x, new_y, ord + 1]
                    if next not in queue:
                        queue.append(next)
        print(queue)
    return len(start)

print(solution(2, 2, 0, 0, [[2,1],[0,1],[1,1],[0,1],[2,1]]))


print(solution(2, 5, 0, 1, [[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]]))
