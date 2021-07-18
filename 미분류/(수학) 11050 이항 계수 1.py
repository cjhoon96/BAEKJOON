'''
https://www.acmicpc.net/problem/11050
이항 계수 1 
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	22262	14322	12357	64.781%
문제
자연수 과 정수 가 주어졌을 때 이항 계수 
를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 과 가 주어진다. (1 ≤  ≤ 10, 0 ≤  ≤ )

출력
 
를 출력한다.

예제 입력 1 
5 2
예제 출력 1 
10
출처
문제를 만든 사람: baekjoon
'''

n, k = map(int, input().split())

ans = 1

for i in range(n):
    ans *= i + 1

for i in range(k):
    ans //= (i + 1)

for i in range(n - k):
    ans //= (i + 1)

print(ans)