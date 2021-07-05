'''
https://www.acmicpc.net/problem/1553
도미노 찾기
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	25	15	15	62.500%
문제


도미노의 크기는 1×2이고, 크기가 1×1인 칸으로 나누어져 있다. 칸은 수를 나타내며, 위와 같이 총 28가지가 있다.

크기가 8×7인 격자가 있고, 격자의 각 칸에는 정수가 하나씩 들어있다. 위의 도미노를 이용해 문제의 격자와 같은 상태를 만드는 방법의 수를 구해보자.

격자의 칸에 적힌 수는 도미노의 칸이 의미하는 수와 같아야 한다. 도미노는 회전할 수 있으며, 같은 도미노를 여러 번 사용하면 안된다.

입력
총 8개의 줄에 격자의 상태가 주어진다.

출력
첫째 줄에 경우의 수를 출력한다.

예제 입력 1 
0000000
0123456
1111112
1234562
2222333
3456345
3444556
6456566

예제 출력 1 
60
'''
from collections import deque
from copy import deepcopy
import sys
input = sys.stdin.readline

domi = set()
for i in range(7):
    for j in range(i,7):
        domi.add((i,j))
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
    print(xy_set)
    xy_set.popleft()
    queue.append((0, 0, domi, xy_set))
    cnt = 0
    
    while queue:
        x, y, now_set, point_set = queue.popleft()
        
        if not point_set:
            cnt += 1
            continue
        pattern_1 = int(domi_field[y][x])
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if (nx, ny) in point_set:
                pattern_2 = int(domi_field[ny][nx])

                if (pattern_1, pattern_2) in now_set:
                    next_point = deepcopy(point_set)
                    next_set = deepcopy(now_set)
                    next_point.remove((nx, ny))
                    if not next_point:
                        cnt += 1
                        continue
                    next_set.remove((pattern_1, pattern_2))
                    next_x, next_y = next_point.popleft()
                    print(next_x, next_y)
                    queue.append((next_x, next_y, next_set, next_point))
                    print('||||'* len(point_set))


                elif (pattern_2, pattern_1) in now_set:
                    next_point = deepcopy(point_set)
                    next_set = deepcopy(now_set)
                    next_point.remove((nx, ny))
                    if not next_point:
                        cnt += 1
                        continue
                    next_set.remove((pattern_2, pattern_1))
                    next_x, next_y = next_point.popleft()
                    queue.append((next_x, next_y, next_set, next_point))
                    print('||||'* len(point_set))


    return cnt

print(bfs())
