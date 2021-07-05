from collections import deque
from copy import deepcopy
import sys
input = sys.stdin.readline

domi = [[0 for _ in range(7)] for _ in range(7)]
for i in range(7):
    for j in range(i,7):
        domi[i][j] = 1

print(domi)

xy_set = deque()
for y in range(8):
    for x in range(7):
        xy_set.append((x,y))

domi_field = []

for i in range(8):
    domi_field.append(input())

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def bfs():
    queue = deque()
    xy_set.popleft()
    queue.append((0, 0, domi, xy_set))   
    cnt = 0
    
    while queue:
        x, y, now_set, point_set = queue.popleft()                          
        
        pattern_1 = int(domi_field[y][x])                                  
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]                                   
            if (nx, ny) not in point_set:
                continue                   
            pattern = [pattern_1, int(domi_field[ny][nx])]
            pattern.sort
            p_1, p_2 = pattern[0], pattern[1]
            if not now_set[p_1][p_2]:
                continue                                      
            next_point = deepcopy(point_set)                        
            next_set = deepcopy(now_set)
            next_point.remove((nx, ny))
            if not next_point:
                cnt += 1
                continue
            next_set[p_1][p_2] = 0
            next_x, next_y = next_point.popleft()                    
            queue.append((next_x, next_y, next_set, next_point))


                
    return cnt

print(bfs())
