'''
https://www.acmicpc.net/problem/2869
달팽이는 올라가고 싶다 출처다국어
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
0.15 초 (추가 시간 없음) (하단 참고)	128 MB	97510	25454	21493	27.643%
문제
땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.

달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

출력
첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.

예제 입력 1 
2 1 5
예제 출력 1 
4
예제 입력 2 
5 1 6
예제 출력 2 
2
예제 입력 3 
100 99 1000000000
예제 출력 3 
999999901
출처
Contest > Croatian Open Competition in Informatics > COCI 2010/2011 > Contest #2 1번

문제를 번역한 사람: baekjoon
데이터를 추가한 사람: CHULMING, jm0707
문제의 오타를 찾은 사람: hellogaon
빠진 조건을 찾은 사람: jh05013
알고리즘 분류
수학
시간 제한
node.js: 0.25 초
C# 6.0 (Mono): 0.25 초
C# 3.0 (Mono): 0.25 초
VB.NET 2.0 (Mono): 0.25 초
VB.NET 4.0 (Mono): 0.25 초
'''

from math import ceil
import sys
input = sys.stdin.readline

A, B, V = map(int, input().split())
print(ceil((V - B) / (A - B)))