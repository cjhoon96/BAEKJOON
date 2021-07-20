'''
https://www.acmicpc.net/contest/problem/666/1
1번 - 빌런 호석 60점성공
시간 제한	메모리 제한
1 초	512 MB
문제
치르보기 빌딩은 층부터 층까지 이용이 가능한 엘리베이터가 있다. 엘리베이터의 층수를 보여주는 디스플레이에는 최대  자리의 수가 보인다. 수는 으로 시작할 수도 있다. 부터 까지의 각 숫자가 디스플레이에 보이는 방식은 아래와 같다. 각 숫자는 7개의 표시등 중의 일부에 불이 들어오면서 표현된다.



예를 들어 인 경우에 층과 층은 아래와 같이 보인다.

                  

빌런 호석은 치르보기 빌딩의 엘리베이터 디스플레이의 LED 중에서 최소 개, 최대 개를 반전시킬 계획을 세우고 있다. 반전이란 켜진 부분은 끄고, 꺼진 부분은 켜는 것을 의미한다. 예를 들어 숫자 을 로 바꾸려면 총 5개의 LED를 반전시켜야 한다. 또한 반전 이후에 디스플레이에 올바른 수가 보여지면서  이상  이하가 되도록 바꿔서 사람들을 헷갈리게 할 예정이다. 치르보기를 사랑하는 모임의 회원인 당신은 호석 빌런의 행동을 미리 파악해서 혼쭐을 내주고자 한다. 현재 엘리베이터가 실제로는 층에 멈춰있을 때, 호석이가 반전시킬 LED를 고를 수 있는 경우의 수를 계산해보자.

입력
 가 공백으로 주어지고 첫째 줄에 주어진다.

출력
호석 빌런이 엘리베이터 LED를 올바르게 반전시킬 수 있는 경우의 수를 계산해보자.

제한
 
예제 입력 1 
9 1 2 5
예제 출력 1 
4
LED를 2개까지 바꿀 수 있을 때, 5층에서 3층, 6층, 8층, 그리고 9층으로 바꿔버릴 수 있다.

예제 입력 2 
48 2 5 35
예제 출력 2 
30
'''


import sys
input = sys.stdin.readline

n, k, p, x = map(int,input().split())

lst = []
lst.append((0, 4, 3, 3, 4, 3, 2, 3, 1, 2))
lst.append((4, 0, 5, 3, 2, 5, 6, 1, 5, 4))
lst.append((3, 5, 0, 2, 5, 4, 3, 4, 2, 3))
lst.append((3, 3, 2, 0, 3, 2, 3, 2, 2, 1))
lst.append((4, 2, 5, 3, 0, 3, 4, 3, 3, 2))
lst.append((3, 5, 4, 2, 3, 0, 1, 4, 2, 1))
lst.append((2, 6, 3, 3, 4, 1, 0, 5, 1, 2))
lst.append((3, 1, 4, 2, 3, 4, 5, 0, 4, 3))
lst.append((1, 5, 2, 2, 3, 2, 1, 4, 0, 1))
lst.append((2, 4, 3, 1, 2, 1, 2, 3, 1, 0))

maxi = 10**k

def decomp(a):
    a_decomposition = []
    de = 10**(k-1)
    while de >= 1:
        a_decomposition.append(a // de)
        a %= de
        de //= 10
    return a_decomposition

x_decomp = decomp(x)

cnt = 0

for now in range(1, n + 1):
    if now == x:
        continue
    now = decomp(now)
    print(now, x_decomp)
    rvrse = 0
    for a,b in zip(x_decomp, now):
        rvrse += lst[a][b]
        print(a,b, lst[a][b], lst[b][a])
        if rvrse > p:
            break
    else:
        cnt += 1

print(cnt)