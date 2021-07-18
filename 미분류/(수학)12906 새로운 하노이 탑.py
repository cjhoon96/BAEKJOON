'''
https://www.acmicpc.net/problem/12906 
새로운 하노이 탑
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
5 초	512 MB	690	387	295	58.416%
문제
오늘은 새로운 하노이 탑 게임을 해보려고 한다. 이 게임의 규칙은 다음과 같다.

막대는 총 세 가지 종류가 있다. 막대 A, 막대 B, 막대 C
게임이 시작될 때, 각각의 막대에는 0개 또는 그 이상의 원판이 놓여져 있다.
모든 원판의 크기는 같으며, 원판의 종류도 A, B, C로 세 가지가 있다. 원판은 원판 A, 원판 B, 원판 C와 같이 표현한다.
한 번 움직이는 것은 한 막대의 가장 위에 있는 원판을 다른 막대의 가장 위로 옮기는 것이다.
게임의 목표는 막대 A에는 원판 A만, 막대 B는 원판 B만, 막대 C는 원판 C만 놓여져 있어야 한다.
되도록 최소로 움직여야 한다.
막대 A, 막대 B, 막대 C에 놓여져 있는 원판의 상태가 주어졌을 때, 게임의 목표를 달성하는데 필요한 움직임의 최소 횟수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 막대 A에 놓여져 있는 원판의 개수와 막대 A의 상태, 둘째 줄에 막대 B에 놓여져 있는 원판의 개수와 막대 B의 상태, 셋째 줄에 막대 C에 놓여져 있는 원판의 개수와 막대 C의 상태가 주어진다. 막대의 상태는 밑에 있는 원판부터 주어진다.

각 막대의 상태는 A, B, C로만 이루어진 문자열이며, 모든 막대에 놓여져 있는 원판 개수의 합은 1보다 크거나 같고, 10보다 작거나 같다.

출력
게임의 목표를 달성하는데 필요한 움직임의 최소 횟수를 출력한다.

예제 입력 1 
1 A
2 AA
2 AA
예제 출력 1 
4
예제 입력 2 
1 B
1 C
1 A
예제 출력 2 
5
예제 입력 3 
3 CBA
0
0
예제 출력 3 
5
'''
from collections import deque
import sys
input = sys.stdin.readline

hanoi_map = []
visited_set = set()

def switch(i, j, hanoi_map):
    new_map = ['','','']
    index = set([0,1,2])
    index -= set([i,j])
    len_i = len(hanoi_map[i])
    hanoi_i = hanoi_map[i]
    hanoi_j = hanoi_map[j]
    hanoi_j += hanoi_i[-1]
    hanoi_i = hanoi_i[:-1]
    k = index.pop()
    new_map[i] = hanoi_i
    new_map[j] = hanoi_j
    new_map[k] = hanoi_map[k]
    return new_map

def bfs(a_cnt, b_cnt, c_cnt):
    global hanoi_map, hanoi_cnt, visited_set
    queue = deque()
    visited_set.add(tuple(hanoi_map))
    queue.append((hanoi_map, 0))

    goal = ['A' * a_cnt, 'B' * b_cnt, 'C' * c_cnt]

    if hanoi_map == goal:
        return 0
    
    while queue:
        now_map, node = queue.popleft()
        next_node = node + 1
        for i in range(3):
            if len(now_map[i]) == 0:
                continue
            for j in range(3):
                if len(now_map[i]) == 0:
                    continue
                if i == j:
                    continue
                next_map = switch(i, j, now_map)
                tuple_map = tuple(next_map)
                if next_map == goal:
                    return next_node
                if tuple_map not in visited_set:
                    visited_set.add(tuple_map)
                    queue.append((next_map, next_node))


a_cnt = 0
b_cnt = 0
c_cnt = 0

for _ in range(3):
    inp = input()
    if inp[0] == '0':
        hanoi_map.append('')
        continue
    n, lst = inp.split()
    a_cnt += lst.count('A')
    b_cnt += lst.count('B')
    c_cnt += lst.count('C')
    hanoi_map.append(lst)

print(bfs(a_cnt, b_cnt, c_cnt))