'''
https://www.acmicpc.net/problem/10828
스택
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
0.5 초 (추가 시간 없음)	256 MB	108998	41444	29907	38.490%
문제
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
예제 출력 1 
2
2
0
2
1
-1
0
1
-1
0
3
예제 입력 2 
7
pop
top
push 123
top
pop
top
pop
예제 출력 2 
-1
-1
123
123
-1
-1
출처
문제를 만든 사람: baekjoon
데이터를 추가한 사람: djm03178
'''

import sys
input = sys.stdin.readline

stack = []
for _ in range(int(input())):
    cmd = input().rstrip()

    if cmd == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)

    elif cmd == 'size':
        print(len(stack))
    
    elif cmd == 'empty':
        if stack:
            print(0)
        else:
            print(1)
    
    elif cmd == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)
    
    else:
        cmd, X = cmd.split()
        stack.append(int(X))
    

'''
인상적인 코드
1
from sys import stdin
2
​
3
stack = []
4
next(stdin)
5
for line in stdin:
6
    command = line.split()
7
    if command[0] == 'push':
8
        stack.append(command[1])
9
    elif command[0] == 'pop':
10
        if stack: print(stack.pop())
11
        else: print(-1)
12
    elif command[0] == 'size':
13
        print(len(stack))
14
    elif command[0] == 'empty':
15
        if stack: print(0)
16
        else: print(1)
17
    elif command[0] == 'top':
18
        if stack: print(stack[-1])
19
        else: print(-1)

'''