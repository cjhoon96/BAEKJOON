'''
https://www.acmicpc.net/problem/19699
소-난다! 출처
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	1024 MB	276	127	112	45.161%
문제
지난 번 헛간 청약의 당첨우(牛)가 발표됐다. 청약에 당첨된 소들은 날아갈 듯이 기뻐하다가 진짜로 하늘을 날았다. 하지만 이후로 소들은 날 수 없었다. 그러던 어느 날, 꿀벌에게 쏘이면 잠깐 하늘을 날 수 있다는 사실을 깨달았다. 이 사실이 퍼지자 소들은 다시 자유롭게 하늘을 날기 시작했다.

소들이 하늘을 날며 우(牛)통사고가 빈번해지자, 농부 존은 소들이 하늘을 나는 것에 제한을 두었다. 소들은 항의했지만 소들의 항의는 받아들여지지 않았다.

농장에는 마리의 소가 있다. 농부 존은 소들의 몸무게의 합이 소수(prime)가 되도록 마리의 소를 선별할 계획이다. 농부 존의 계획에 맞게 소를 선별했을 때 나올 수 있는 몸무게의 합을 모두 출력하시오.

입력
첫째 줄에 농장에 있는 소들의 수 , 선별할 소의 수 이 주어진다.

둘째 줄에 소들의 몸무게 가 주어진다.

출력
마리 소들의 몸무게 합으로 만들 수 있는 모든 소수를 오름차순으로 출력한다. 만약 그러한 경우가 없다면 을 출력한다.

제한

예제 입력 1 
5 3
2 4 10 5 8
예제 출력 1 
11 17 19 23
'''

from math import sqrt
import sys
input = sys.stdin.readline
from itertools import combinations

N, M = map(int,input().split())
w_lst = list(map(int,input().split()))

lst = []
for comb in combinations(w_lst, M):
    t = sum(comb)
    if t == 1:
        continue
    for i in range(2, int(sqrt(t)) + 1):
        if t % i == 0:
            break

    else:
        if t not in lst:
            lst.append(t)

if lst:
    lst.sort()
    for i in lst:
        print(i, end = ' ')

else:
    print(-1)