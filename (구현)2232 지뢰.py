"""
https://www.acmicpc.net/problem/2232
지뢰
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	333	125	94	46.766%
문제
일직선상에 N(1≤N≤50,000)개의 지뢰가 같은 간격으로 매설되어 있다. 각각의 지뢰는 충격 강도 P(1≤P≤10,000)가 있어서, P를 초과하는 힘을 가하면 P만큼의 힘을 발휘하며 터지게 된다. 어떤 지뢰가 터지게 되면, 그 지뢰의 좌우에 있는 지뢰에 힘을 발휘하게 된다. 예를 들어 다음과 같이 지뢰가 매설된 경우를 보자.

1 2 5 4 3 3 6 6 2

첫 번째의 지뢰를 터트리게 되면 두 번째 지뢰에 1만큼의 힘을 발휘하게 된다. 만약 세 번째의 지뢰를 터뜨리게 되면 2, 4번째 지뢰에 5만큼의 힘을 발휘하게 된다. 따라서 2, 4번째 지뢰도 연쇄 반응을 일으키며 터지고, 다시 1번 지뢰에 2만큼의 힘을, 5번 지뢰에 4만큼의 힘을 발휘하여 연쇄 반응을 일으킨다. 그 후에는 6번 지뢰에 3만큼의 힘을 가하게 되고, 이는 3을 초과하는 힘이 아니기 때문에 연쇄 반응이 멈추게 된다. 정리하면, 세 번째의 지뢰를 직접 터트리고 나면 1~5번 지뢰가 모두 터지게 된다. 다음으로 7, 8번 지뢰를 각각 터트리면 모든 지뢰를 터트릴 수 있다.

지뢰를 직접 터트리는 것은 위험하기 때문에, 당신은 최소의 개수의 지뢰를 직접 터트려서 모든 지뢰를 터트리려 한다. 위의 예에서는 세 개의 지뢰를 직접 터트리면 연쇄 반응에 의해서 모든 지뢰를 터트릴 수 있다.

각 지뢰에 대한 정보가 주어졌을 때, 최소 개수의 지뢰를 직접 터트려서 모든 지뢰를 터트리고자 할 때, 직접 터트려야 하는 지뢰들을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N이 주어진다. 다음 N개의 지뢰는 차례대로 각 지뢰의 충격 강도가 주어진다.

출력
직접 터트려야 하는 지뢰의 번호를 오름차순으로 출력한다.

예제 입력 1 
9
1
2
5
4
3
3
6
6
2
예제 출력 1 
3
7
8
"""

import sys
input = sys.stdin.readline

N = int(input())

map = [0,]

for _ in range(N):
    map.append(int(input()))

idx = 1
jdx = 2
sorting = True
lst = []
while jdx<len(map):
    if sorting and map[idx]>map[jdx]:
        lst.append(idx)
        sorting = False
    if sorting and map[idx] == map[jdx]:
        lst.append(idx)
    if not sorting and map[idx] == map[jdx]:
        if map[jdx] > map[jdx+1]:
            lst.append(jdx)
    elif not sorting and map[idx]<map[jdx]:
        sorting = True
    idx += 1
    jdx += 1

if map[jdx-1]>=map[idx-1]:
    lst.append(jdx-1)

lst.sort()

for i in lst:
    print(i)