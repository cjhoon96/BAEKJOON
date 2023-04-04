from collections import deque
from copy import deepcopy
n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))


score = 0

direction = [(1, 0), (-1, 0), (0, -1), (0, 1)]




def bfs(x,y):
    now_num = graph[y][x]
    now_list = [(x, y)]
    bndry = []
    queue = deque([(x, y)])
    while queue: 
        now_x, now_y = queue.popleft()
        for dx, dy in direction: 
            nxt_x, nxt_y = now_x + dx, now_y + dy 
            if nxt_x < 0  or nxt_x >= n or nxt_y < 0 or nxt_y >= n:
                continue
            if graph[nxt_y][nxt_x] == now_num and not visited[nxt_y][nxt_x]:
                queue.append((nxt_x, nxt_y))
                now_list.append((nxt_x, nxt_y))
                visited[nxt_y][nxt_x] = 1
            if graph[nxt_y][nxt_x] != now_num:
                bndry.append((nxt_x, nxt_y))
    return [now_num, now_list, bndry]
        


def cal_score(groups):
    global score
    for i in range(len(groups) - 1):
        for j in range(i+1, len(groups)):
            bndry_cnt = 0
            group_a = groups[i]
            cnt_a = len(groups[i][1])
            a_num = groups[i][0]
            group_b = groups[j][1]
            cnt_b = len(group_b)
            b_num = groups[j][0]
            for bndry_point in group_a[2]:
                if bndry_point in group_b:
                    bndry_cnt += 1
            score += (cnt_a + cnt_b) * a_num * b_num * bndry_cnt

    return score



for cycle in range(4):

    visited = [[0 for _ in range(n)] for _ in range(n)]
    groups = []
    for i in range(n):
        for j in range(n):
            if not visited[j][i]:
                visited[j][i] = 1
                groups.append(bfs(i,j))

    cal_score(groups)

    mid_x = n//2
    mid_y = n//2
    new_graph = deepcopy(graph)

    for i in range(mid_x):
        for j in range(mid_y):
            new_graph[j][mid_x - i - 1] = graph[i][j]
            new_graph[j + mid_x + 1][mid_x-i-1] = graph[i + mid_x + 1][j]
            new_graph[j][mid_x - i - 1 + mid_x + 1] = graph[i][j + mid_x + 1]
            new_graph[j + mid_x + 1][mid_x - i - 1 + mid_x + 1] = graph[i + mid_x + 1][j + mid_x + 1]

    for i in range(n):
        new_graph[n-1-mid_x][i] = graph[i][mid_x]
        new_graph[n-1-i][mid_x] = graph[mid_x][i]
        

    graph = deepcopy(new_graph)
    print(graph)
    print(score)

print(score)











# print(groups)