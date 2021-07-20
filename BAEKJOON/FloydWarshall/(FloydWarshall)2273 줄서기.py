''' 
https://www.acmicpc.net/problem/2273
줄 서기
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	102	17	15	17.857%
문제
N명의 학생들이 키 순서대로 줄을 서려고 한다. 각 학생의 키를 직접 재서 정렬하면 간단하겠지만, 마땅한 방법이 없어서 두 학생의 키를 비교하는 방법을 사용하기로 하였다. 그나마도 모든 학생들을 다 비교해 본 것이 아니고, 일부 학생들의 키만을 비교해 보았다.

일부 학생들의 키를 비교한 결과가 주어졌을 때, 각 학생이 설 수 있는 위치의 범위를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N(1≤N≤256), M(1≤M≤100,000)이 주어진다. M은 키를 비교한 회수이다. 다음 M개의 줄에는 키를 비교한 두 학생의 번호 A, B가 주어진다. 이는 학생 A가 학생 B의 앞에 서야 한다는 의미이다. 같은 학생들을 여러 번 비교했을 수도 있다.

출력
N개의 줄에 각 학생이 설 수 있는 위치의 범위를 출력한다. 불가능한 경우에는 첫째 줄에 -1을 출력한다.

예제 입력 1 
3 2
1 3
2 3
예제 출력 1 
1 2
1 2
3 3
힌트
1 2 3, 2 1 3의 방법이 가능하기 때문에 답이 위와 같이 된다.
'''

import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int,input().split())

compare = [[0 for _ in range(n)] for _ in range(n)]


for _ in range(m):
    a, b = map(int,input().split())
    a, b = a - 1, b - 1
    compare[a][b] = 1

for i in range(n):
    for j in range(n):
        for k in range(n):
            if compare[j][i]*compare[i][k]:
                compare[j][k] = 1

wrong = False
for i in range(n):
    for j in range(n):
        if compare[i][j]*compare[j][i]:
            wrong = True
            break
    if wrong:
        print(-1)
        break
else:
    for i in range(n):
        mini, maxi = 1, n
        for j in range(n):
            if compare[i][j]:
                maxi -= 1
            if compare[j][i]:
                mini += 1
        print(mini, maxi)