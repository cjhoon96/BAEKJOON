"""
https://www.acmicpc.net/problem/1063
킹
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	6871	2104	1770	32.153%
문제
8*8크기의 체스판에 왕이 하나 있다. 킹의 현재 위치가 주어진다. 체스판에서 말의 위치는 다음과 같이 주어진다. 알파벳 하나와 숫자 하나로 이루어져 있는데, 알파벳은 열을 상징하고, 숫자는 행을 상징한다. 열은 가장 왼쪽 열이 A이고, 가장 오른쪽 열이 H까지 이고, 행은 가장 아래가 1이고 가장 위가 8이다. 예를 들어, 왼쪽 아래 코너는 A1이고, 그 오른쪽 칸은 B1이다.

킹은 다음과 같이 움직일 수 있다.

R : 한 칸 오른쪽으로
L : 한 칸 왼쪽으로
B : 한 칸 아래로
T : 한 칸 위로
RT : 오른쪽 위 대각선으로
LT : 왼쪽 위 대각선으로
RB : 오른쪽 아래 대각선으로
LB : 왼쪽 아래 대각선으로
체스판에는 돌이 하나 있는데, 돌과 같은 곳으로 이동할 때는, 돌을 킹이 움직인 방향과 같은 방향으로 한 칸 이동시킨다. 아래 그림을 참고하자.



입력으로 킹이 어떻게 움직여야 하는지 주어진다. 입력으로 주어진 대로 움직여서 킹이나 돌이 체스판 밖으로 나갈 경우에는 그 이동은 건너 뛰고 다음 이동을 한다.

킹과 돌의 마지막 위치를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 킹의 위치, 돌의 위치, 움직이는 횟수 N이 주어진다. 둘째 줄부터 N개의 줄에는 킹이 어떻게 움직여야 하는지 주어진다. N은 50보다 작거나 같은 자연수이고, 움직이는 정보는 위에 쓰여 있는 8가지 중 하나이다.

출력
첫째 줄에 킹의 마지막 위치, 둘째 줄에 돌의 마지막 위치를 출력한다.

예제 입력 1 
A1 A2 5
B
L
LB
RB
LT
예제 출력 1 
A1
A2
"""

king, stone, N = input().split()

king = [ord(king[0])-64, int(king[1])]
stone = [ord(stone[0])-64, int(stone[1])]
N = int(N)
motion = []

for _ in range(N):
    motion.append(input())

motion_dic = {'R':(1,0), 'L':(-1,0), 'B':(0,-1), 'T':(0,1), 'RT':(1,1), 'LT':(-1,1), 'RB':(1,-1), 'LB':(-1,-1)}

for i in range(N):
    next_king = [x+y for x,y in zip(king,motion_dic[motion[i]])]
    if next_king == stone:
        next_stone = [x+y for x,y in zip(stone,motion_dic[motion[i]])]
    else:
        next_stone = stone
    if 1 <= next_king[0] <= 8 and 1 <= next_king[1] <= 8 and 1 <= next_stone[0] <= 8 and 1 <= next_stone[1] <= 8:
        stone = next_stone
        king = next_king

last_king = chr(king[0]+64) + str(king[1])
last_stone = chr(stone[0]+64) + str(stone[1])

print(last_king)
print(last_stone)