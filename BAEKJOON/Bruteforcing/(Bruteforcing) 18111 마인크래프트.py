'''
https://www.acmicpc.net/problem/18111
마인크래프트 출처
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초 (추가 시간 없음)	1024 MB	8817	2621	2025	28.231%
문제
팀 레드시프트는 대회 준비를 하다가 지루해져서 샌드박스 게임인 ‘마인크래프트’를 켰다. 마인크래프트는 1 × 1 × 1(세로, 가로, 높이) 크기의 블록들로 이루어진 3차원 세계에서 자유롭게 땅을 파거나 집을 지을 수 있는 게임이다.

목재를 충분히 모은 lvalue는 집을 짓기로 하였다. 하지만 고르지 않은 땅에는 집을 지을 수 없기 때문에 땅의 높이를 모두 동일하게 만드는 ‘땅 고르기’ 작업을 해야 한다.

lvalue는 세로 N, 가로 M 크기의 집터를 골랐다. 집터 맨 왼쪽 위의 좌표는 (0, 0)이다. 우리의 목적은 이 집터 내의 땅의 높이를 일정하게 바꾸는 것이다. 우리는 다음과 같은 두 종류의 작업을 할 수 있다.

좌표 (i, j)의 가장 위에 있는 블록을 제거하여 인벤토리에 넣는다.
인벤토리에서 블록 하나를 꺼내어 좌표 (i, j)의 가장 위에 있는 블록 위에 놓는다.
1번 작업은 2초가 걸리며, 2번 작업은 1초가 걸린다. 밤에는 무서운 몬스터들이 나오기 때문에 최대한 빨리 땅 고르기 작업을 마쳐야 한다. ‘땅 고르기’ 작업에 걸리는 최소 시간과 그 경우 땅의 높이를 출력하시오.

단, 집터 아래에 동굴 등 빈 공간은 존재하지 않으며, 집터 바깥에서 블록을 가져올 수 없다. 또한, 작업을 시작할 때 인벤토리에는 B개의 블록이 들어 있다. 땅의 높이는 256블록을 초과할 수 없으며, 음수가 될 수 없다.

입력
첫째 줄에 N, M, B가 주어진다. (1 ≤ M, N ≤ 500, 0 ≤ B ≤ 6.4 × 107)

둘째 줄부터 N개의 줄에 각각 M개의 정수로 땅의 높이가 주어진다. (i + 2)번째 줄의 (j + 1)번째 수는 좌표 (i, j)에서의 땅의 높이를 나타낸다. 땅의 높이는 256보다 작거나 같은 자연수 또는 0이다.

출력
첫째 줄에 땅을 고르는 데 걸리는 시간과 땅의 높이를 출력하시오. 답이 여러 개 있다면 그중에서 땅의 높이가 가장 높은 것을 출력하시오.

예제 입력 1 
3 4 99
0 0 0 0
0 0 0 0
0 0 0 1
예제 출력 1 
2 0
맨 오른쪽 아래의 블록을 제거하면 모두 높이가 0으로 고른 상태가 된다. 따라서 블럭을 한 번 제거하는 시간 2초가 소요된다.

예제 입력 2 
3 4 1
64 64 64 64
64 64 64 64
64 64 64 63
예제 출력 2 
1 64

 

인벤토리에 블록이 하나 있기 때문에, 맨 오른쪽 아래에 블록을 하나 채우면 된다.

예제 입력 3 
3 4 0
64 64 64 64
64 64 64 64
64 64 64 63
예제 출력 3 
22 63
인벤토리가 비어 있기 때문에, 맨 오른쪽 아래를 제외한 모든 좌표에서 블록을 하나씩 제거해야 한다.

출처
University > 서강대학교 > 2019 Sogang Programming Contest (Champion) B번

문제를 검수한 사람: jh05013, shiftpsh
문제를 만든 사람: lvalue
'''

import sys
input = sys.stdin.readline

n, m, b = map(int,input().split())

h_dic = {}

for _ in range(n):
    for h in map(int,input().split()):
        if h in h_dic:
            h_dic[h] += 1
        else:
            h_dic[h] = 1
            
h_key = sorted(h_dic.keys(), reverse = True)

mini_time = 1e9
height = None

for standard in range(h_key[0],h_key[-1] - 1, -1):
    time = 0
    block = b
    for h in h_key:
        h_locs = h_dic[h]
        if h > standard:
            h_dif = h - standard
            time += h_dif * 2 * h_locs
            block += h_dif * h_locs
        elif h < standard:
            h_dif = standard - h
            time += h_dif * h_locs
            block -= h_dif * h_locs
        
        if block < 0 or time > mini_time:
            time = 1e9
            break

    if time < mini_time:
        mini_time = time
        height = standard

print(mini_time, height)