'''
https://www.acmicpc.net/problem/1978
소수 찾기
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	75661	35790	29239	48.182%
문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.

예제 입력 1 
4
1 3 5 7
예제 출력 1 
3
출처
데이터를 추가한 사람: bclim9108, nova9128
문제의 오타를 찾은 사람: djm03178
'''
#Sieve of Eratosthenes

n = int(input())

lst = list(map(int,input().split()))

m = max(lst)

eratos = [0, 0] + [1] * (m - 1)

for i in range(2, m + 1):
    if eratos[i]:
        j = 2
        last = m // i
        while j <= last:
            now = i*j
            eratos[now] = 0
            j += 1

cnt = 0
for i in lst:
    cnt += eratos[i]

print(cnt)