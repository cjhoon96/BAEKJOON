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

domi = set()                # 도미노의 패턴을 정리할 집합 
for i in range(7):
    for j in range(i,7):
        domi.add((i,j))
print(domi)
# {(3, 4), (4, 6), (0, 2), (0, 5), (2, 2), (1, 6), (2, 5), (1, 3), (4, 5), (3, 3), (5, 6), (3, 6), (0, 1), (2, 4), (1, 2), (0, 4), (1, 5), (3, 5), (4, 4), (5, 5), (0, 0), (1, 1), (0, 3), (1, 4), (0, 6), (2, 3), (2, 6), (6, 6)}

xy_set = deque()
for x in range(7):
    for y in range(8):
        xy_set.append((x,y))
#아직 방문하지 않은 좌표들을 저장할 queue
#deque([(0, 0), (1, 0), (2, 0), (3, 0), (4, 0), (5, 0), (6, 0), (0, 1), (1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (0, 2), (1, 2), (2, 2), (3, 2), (4, 2), (5, 2), (6, 2), (0, 3), (1, 3), (2, 3), (3, 3), (4, 3), (5, 3), (6, 3), (0, 4), (1, 4), (2, 4), (3, 4), (4, 4), (5, 4), (6, 4), (0, 5), (1, 5), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (0, 6), (1, 6), (2, 6), (3, 6), (4, 6), (5, 6), (6, 6), (0, 7), (1, 7), (2, 7), (3, 7), (4, 7), (5, 7), (6, 7)])

domi_field = []

for i in range(8):
    domi_field.append(input())
# 문제에서 주어준 7x8 따리 도미노 판

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def bfs():
    queue = deque()
    print(xy_set)
    xy_set.popleft()
    queue.append((0, 0, domi, xy_set))    # x좌표, y좌표, 아직 사용되지 않은 도미노 패턴 집합, 아직 방문하지 않은 x,y 좌표 큐    이런식으로 queue에 집어넣을거야
    cnt = 0
    # cnt : 완성된 경우의 수를 저장할 변수
    
    while queue:
        x, y, now_set, point_set = queue.popleft()                          # 맨 앞에거를 끄내!!

        pattern_1 = int(domi_field[y][x])                                   # 이 좌표의 패턴을 읽어
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]                                   # 현 x,y를 기준으로 인접한 좌표들을 설정해
            if (nx, ny) in point_set:
                pattern_2 = int(domi_field[ny][nx])                         # 만약 인접한 좌표들이 아직 방문하지 않은 좌표라면 해당 좌표의 패턴을 확인해

                if (pattern_1, pattern_2) in now_set:                       # 확인한 두 패턴을 이어 붙여서 도미노 패턴을 만들구 해당 패턴을 우리가 사용했는지 확인해
                    next_point = deepcopy(point_set)                        # 이거랑 아래줄이 중요해
                    next_set = deepcopy(now_set)                            # 딥카피를 해줘 왜냐하면 우리는 각 nx,ny도 방문 처리 해주고 각 경우의 도미노 패턴도 사용처리를 해줘야 하는데 경우가 다 다르니까!!
                    next_point.remove((nx, ny))                             # 우선 nx,ny 좌표를 방문 처리 해줘
                    if not next_point:                                      # 그리구 확인해 혹시 모든 좌표를 방문 했는지
                        cnt += 1                                            # 다 방문했으면 하나의 경우의 수가 만들어진 거니까 cnt를 1 더해줘
                        continue
                    next_set.remove((pattern_1, pattern_2))                 # 그리구 위에서 사용한 도미노 패턴은 사용처리 해줘
                    next_x, next_y = next_point.popleft()                   # 그리구 방문하지 않은 좌표중에 우리가 방금 본 x,y에 가까운 좌표를 팦해         *이부분도 중요해 집합을 사용하지 않은 이유야 맨밑에 설명 봐죠
                    print(next_x, next_y)
                    queue.append((next_x, next_y, next_set, next_point))    # 그리구 큐에 다음 확인 할 거를 저장해
                    print('||||'* len(point_set))


                elif (pattern_2, pattern_1) in now_set:                     # 위에서 이프문을 돌지 못한 경우는 (pattern_1, pattern_2) 이 도미노 패턴 집합에 없는 경우인데 혹시 뒤집으면 될 수 있으니까 뒤집어서 확인해
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
                                                                            # 만약 뒤집어도 없으면 이 가지는 더이상 볼 필요 없으니까 queue를 추가하지 않아

    return cnt

print(bfs())



# ** 좌표 집합을 집합이 아닌 큐를 사용한 이유 만약에 0,0을 본다음에 집합으로 팝 하면 5,3 이 다음 좌표로 나왔다고 해바 그럼 5,3 인접 좌표들은 4개 모두 방문 처리 되지 않아서 큐에 들어가는게 더 많아져
#    하지만 x,y를 0,0 nx,ny를 1,0 을 본 직후인 경우에 큐를 써서 팦레프트 해주면 조금이라도 0,0에 가까운 애들을 먼저 볼 가능성이 더 커지고 그럼 방문 처리된 좌표들이 생겨서 훨씬 더 빠르더라구




'''
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
'''