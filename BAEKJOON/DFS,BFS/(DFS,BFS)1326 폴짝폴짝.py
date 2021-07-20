'''
https://www.acmicpc.net/problem/1326
폴짝폴짝
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	1316	323	210	25.485%
문제
개구리가 일렬로 놓여 있는 징검다리 사이를 폴짝폴짝 뛰어다니고 있다. 징검다리에는 숫자가 각각 쓰여 있는데, 이 개구리는 매우 특이한 개구리여서 어떤 징검다리에서 점프를 할 때는 그 징검다리에 쓰여 있는 수의 배수만큼 떨어져 있는 곳으로만 갈 수 있다.

이 개구리는 a번째 징검다리에서 b번째 징검다리까지 가려고 한다. 이 개구리가 a번째 징검다리에서 시작하여 최소 몇 번 점프를 하여 b번째 징검다리까지 갈 수 있는지를 알아보는 프로그램을 작성하시오.

입력
첫째 줄에 징검다리의 개수 N(1≤N≤10,000)이 주어지고, 이어서 각 징검다리에 쓰여 있는 N개의 정수가 주어진다. 그 다음 줄에는 N보다 작거나 같은 자연수 a, b가 주어지는 데, 이는 개구리가 a번 징검다리에서 시작하여 b번 징검다리에 가고 싶다는 뜻이다. 징검다리에 쓰여있는 정수는 10,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 개구리가 a번 징검다리에서 b번 징검다리로 최소 몇 번 점프하여 갈 수 있는 지를 출력하시오. a에서 b로 갈 수 없는 경우에는 -1을 출력한다.

예제 입력 1 
5
1 2 2 1 2
1 5
예제 출력 1 
1
'''
'''
import sys 
input = sys.stdin.readline

N = int(input())

Map = tuple(map(int,input().split()))

a, b = map(int,input().split())

a -= 1
b -= 1

not_visited = set(i for i in range(N))

jump = 1

is_a = False

last = [b]

while not_visited:

    check_lst = list(not_visited)
    exist = False
    now = []

    for i in check_lst:

        if Map[i] == 0:
            continue
        
        for l in last:
            if abs(l - i) % Map[i] == 0:
                exist = True
                not_visited.remove(i)
                now.append(i)
                if i == a:
                    is_a = True
                    break
                break
        
        if is_a:
            break
        
    if is_a or not exist:
        break
    
    last = now
    jump += 1

if is_a:
    print(jump)

else:
    print(-1)

'''

from collections import deque

import sys 
input = sys.stdin.readline

def bfs(a, b, bridge, N):
    q = deque()
    q.append(a-1)
    check = [-1]*N
    check[a-1] = 0
    while q:
        node = q.popleft()
        for n in range(node, N, bridge[node]):
            if check[n] == -1:
                q.append(n)
                check[n] = check[node] + 1
                if n == b-1:
                    return check[n]
        for n in range(node, -1, -bridge[node]):
            if check[n] == -1:
                q.append(n)
                check[n] = check[node] + 1
                if n == b-1:
                    return check[n]
    return -1

N = int(input())

N = int(input())
bridge = list(map(int, input().split()))
a, b = map(int, input().split())
print(bfs(a, b, bridge, N))