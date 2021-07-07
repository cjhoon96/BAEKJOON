'''
https://www.acmicpc.net/problem/1405
미친 로봇 스페셜 저지
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	128 MB	7200	2663	1835	33.608%
문제
통제 할 수 없는 미친 로봇이 평면위에 있다. 그리고 이 로봇은 N번의 행동을 취할 것이다.

각 행동에서 로봇은 4개의 방향 중에 하나를 임의로 선택한다. 그리고 그 방향으로 한 칸 이동한다.

로봇이 같은 곳을 한 번보다 많이 이동하지 않을 때, 로봇의 이동 경로가 단순하다고 한다. (로봇이 시작하는 위치가 처음 방문한 곳이다.) 로봇의 이동 경로가 단순할 확률을 구하는 프로그램을 작성하시오. 예를 들어, EENE와 ENW는 단순하지만, ENWS와 WWWWSNE는 단순하지 않다. (E는 동, W는 서, N은 북, S는 남)

입력
첫째 줄에 N, 동쪽으로 이동할 확률, 서쪽으로 이동할 확률, 남쪽으로 이동할 확률, 북쪽으로 이동할 확률이 주어진다. N은 14보다 작거나 같은 자연수이고,  모든 확률은 100보다 작거나 같은 자연수 또는 0이다. 그리고, 동서남북으로 이동할 확률을 모두 더하면 100이다.

확률의 단위는 %이다.

출력
첫째 줄에 로봇의 이동 경로가 단순할 확률을 출력한다. 절대/상대 오차는 10-9 까지 허용한다.

예제 입력 1 
2 25 25 25 25
예제 출력 1 
0.75
'''

from collections import deque

N, e, w, s, n  = map(int,input().split())
e, w, s, n = e / 100, w / 100, s / 100, n / 100
dx = (1, -1, 0, 0)
dy = (0, 0, 1, -1)
pct_lst = (e, w, n, s)

pct = 0
def dfs(x, y, node, trace, now_pct):
    global pct
    if node == N:
        pct += now_pct
        return
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if (nx, ny) not in trace:
            dfs(nx, ny, node + 1, trace|set([(nx, ny)]), now_pct * pct_lst[i])
    return

dfs(0, 0, 0, set([(0,0)]), 1)

print(pct)