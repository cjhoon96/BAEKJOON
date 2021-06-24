'''
https://www.acmicpc.net/problem/1331
나이트 투어
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	3963	1047	905	27.533%
문제
나이트 투어는 체스판에서 나이트가 모든 칸을 정확히 한 번씩 방문하며, 마지막으로 방문하는 칸에서 시작점으로 돌아올 수 있는 경로이다. 다음 그림은 나이트 투어의 한 예이다.



영식이는 6×6 체스판 위에서 또 다른 나이트 투어의 경로를 찾으려고 한다. 체스판의 한 칸은 A~F 중의 알파벳 하나와 1~6 중의 숫자 하나로 나타낼 수 있다. 영식이의 나이트 투어 경로가 주어질 때, 이것이 올바른 것이면 Valid, 올바르지 않으면 Invalid를 출력하는 프로그램을 작성하시오.

입력
36개의 줄에 나이트가 방문한 순서대로 입력이 주어진다.

출력
첫째 줄에 문제의 정답을 출력한다.

예제 입력 1 
A1
B3
A5
C6
E5
F3
D2
F1
E3
F5
D4
B5
A3
B1
C3
A2
C1
E2
F4
E6
C5
A6
B4
D5
F6
E4
D6
C4
B6
A4
B2
D1
F2
D3
E1
C2
예제 출력 1 
Valid
'''


knight = ((2,1), (2,-1), (-2,1), (-2,-1), (1,2), (1,-2), (-1,2), (-1,-2))
check = True
now = input()
now = (ord(now[0])-64, int(now[1]))
visited = set(now)
last = now

def f(next):
    global now, check, visited
    if next in visited:
        check = False
        return
    for i in knight:
        if tuple(x+y for x,y in zip(now, i)) == next:
            now = next
            visited.add(next)
            break
    else:
        check = False
    return

for _ in range(35):
    next = input()
    next = (ord(next[0])-64, int(next[1]))
    if check:
        f(next)

else:
    f(last)
    if check:
        print('Valid')
    else:
        print('Invalid')