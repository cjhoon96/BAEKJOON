'''
https://www.acmicpc.net/problem/
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	26404	11968	9497	45.256%
문제
수열 A가 주어졌을 때, 그 수열의 증가 부분 수열 중에서 합이 가장 큰 것을 구하는 프로그램을 작성하시오.

예를 들어, 수열 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 인 경우에 합이 가장 큰 증가 부분 수열은 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 이고, 합은 113이다.

입력
첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000)이 주어진다.

둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000)

출력
첫째 줄에 수열 A의 합이 가장 큰 증가 부분 수열의 합을 출력한다.

예제 입력 1 
10
1 100 2 50 60 3 5 6 7 8
예제 출력 1 
113
'''

import sys
input = sys.stdin.readline

N = int(input())

A = tuple(map(int,input().split()))

dp = list(A)

for i in range(N):
    for j in range(i):
        if A[i] > A[j]:
            dp[i] = max((dp[j] + A[i], dp[i]))

print(max(dp))



'''
n = int(input())
a = list(map(int, input().split()))
c = [0] * 1001
for i in range(n): 
    c[a[i]] = max(c[:a[i]]) + a[i]
    print(c)
print(max(c))
'''