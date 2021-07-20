'''
https://www.acmicpc.net/problem/14003
가장 긴 증가하는 부분 수열 5 스페셜 저지
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
3 초	512 MB	10243	3460	2434	36.734%
문제
수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

입력
첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.

둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (-1,000,000,000 ≤ Ai ≤ 1,000,000,000)

출력
첫째 줄에 수열 A의 가장 긴 증가하는 부분 수열의 길이를 출력한다.

둘째 줄에는 정답이 될 수 있는 가장 긴 증가하는 부분 수열을 출력한다.

예제 입력 1 
6
10 20 10 30 20 50
예제 출력 1 
4
10 20 30 50
'''

import sys
input = sys.stdin.readline
from bisect import bisect_left

N = int(input())

A = tuple(map(int,input().split()))

dp = [-1e9]
len_dp = [0 for _ in range(N)]

for i in range(N):
    if dp[-1] >= A[i]:
        len_dp[i] = bisect_left(dp, A[i])
        dp[len_dp[i]] = A[i]
        
    else:
        dp.append(A[i])
        len_dp[i] = len(dp) - 1

l = len(dp) - 1

print(l)

lst = []

for i in range(N - 1, -1, -1):
    if len_dp[i] == l:
        lst.append(A[i])
        l -= 1
        
lst.reverse()

for i in lst:
    print(i, end = ' ')