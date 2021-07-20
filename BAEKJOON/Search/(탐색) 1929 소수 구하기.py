'''
https://www.acmicpc.net/problem/1929
소수 구하기
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	256 MB	108828	30795	21798	27.209%
문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

예제 입력 1 
3 16
예제 출력 1 
3
5
7
11
13
출처
데이터를 추가한 사람: jinjean0123
'''
'''
import sys
input = sys.stdin.readline
from math import sqrt

n, m = map(int,input().split())

for num in range(n, m + 1):
    if num == 1:
        continue
    elif num == 2:
        print(2)
    else:    
        for i in range(2, int(sqrt(num)) + 1):
            if num % i == 0:
                break
        else:
            print(num)'''

import sys
input = sys.stdin.readline

n, m = map(int,input().split())

eratos = [0, 0] + [1] * (m - 1)

for i in range(2, m + 1):
    if eratos[i]:
        j = 2
        last = m // i
        while j <= last:
            now = i*j
            eratos[now] = 0
            j += 1

for i in range(n, m + 1):
    if eratos[i]:
        print(i)