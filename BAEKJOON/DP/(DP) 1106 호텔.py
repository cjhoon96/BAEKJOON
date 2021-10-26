'''
https://www.acmicpc.net/problem/1106
호텔
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	2562	678	492	28.163%
문제
세계적인 호텔인 형택 호텔의 사장인 김형택은 이번에 수입을 조금 늘리기 위해서 홍보를 하려고 한다.

형택이가 홍보를 할 수 있는 도시가 주어지고, 각 도시별로 홍보하는데 드는 비용과, 그 때 몇 명의 호텔 고객이 늘어나는지에 대한 정보가 있다.

예를 들어, “어떤 도시에서 9원을 들여서 홍보하면 3명의 고객이 늘어난다.”와 같은 정보이다. 이때, 이러한 정보에 나타난 돈에 정수배 만큼을 투자할 수 있다. 즉, 9원을 들여서 3명의 고객, 18원을 들여서 6명의 고객, 27원을 들여서 9명의 고객을 늘어나게 할 수 있지만, 3원을 들여서 홍보해서 1명의 고객, 12원을 들여서 4명의 고객을 늘어나게 할 수는 없다.

각 도시에는 무한 명의 잠재적인 고객이 있다. 이때, 호텔의 고객을 적어도 C명 늘이기 위해 형택이가 투자해야 하는 돈의 최솟값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 C와 형택이가 홍보할 수 있는 도시의 개수 N이 주어진다. C는 1,000보다 작거나 같은 자연수이고, N은 20보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에는 각 도시에서 홍보할 때 대는 비용과 그 비용으로 얻을 수 있는 고객의 수가 주어진다. 이 값은 100보다 작거나 같은 자연수이다.

출력
첫째 줄에 문제의 정답을 출력한다.

예제 입력 1 
12 2
3 5
1 1 
예제 출력 1 
8
출처
문제를 번역한 사람: baekjoon
문제의 오타를 찾은 사람: ldd0901, pos10022, semtax
'''
import sys
input = sys.stdin.readline
from math import ceil

c, n = map(int,input().split())

cost_lst = [tuple(map(int,input().split())) for _ in range(n)]    

rng = 1e9
for cost,plus in cost_lst:
    now_rng = ceil(c/plus) * cost
    if rng > now_rng:
        rng = now_rng

dp = [0 for _ in range(rng + 1)]    # 해당 인덱스 값이 현재 지불한 코스트일때 추가로 모을 수 있는 손님의 최대 인원

for cost, plus in cost_lst:
    n_cost = cost
    n_plus = plus
    while n_cost <= rng:
        dp[n_cost] = max(dp[n_cost], n_plus)
        n_cost += cost
        n_plus += plus

for i in range(rng + 1):
    maxi = dp[i]
    now_dp = dp[:i + 1]
    for j in range(1, i//2 + 1):
        L, R = now_dp[j], now_dp[-j-1]
        if L and R and maxi < L + R:
            maxi = L + R
    dp[i] = maxi
    
    if maxi >= c:
        print(i)
        break
