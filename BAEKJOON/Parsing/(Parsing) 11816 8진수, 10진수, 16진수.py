'''
https://www.acmicpc.net/problem/11816
8진수, 10진수, 16진수
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	3390	2354	2070	70.552%
문제
정수 X가 주어진다. 정수 X는 항상 8진수, 10진수, 16진수 중에 하나이다.

8진수인 경우에는 수의 앞에 0이 주어지고, 16진수인 경우에는 0x가 주어진다.

X를 10진수로 바꿔서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 X가 주어진다. X는 10진수로 바꿨을 때, 1,000,000보다 작거나 같은 자연수이다. 16진수인 경우 알파벳은 소문자로만 이루어져 있다.

출력
첫째 줄에 입력받은 X를 10진수로 바꿔서 출력한다.

예제 입력 1 
10
예제 출력 1 
10
예제 입력 2 
010
예제 출력 2 
8
예제 입력 3 
0x10
예제 출력 3 
16
예제 입력 4 
0x3f6
예제 출력 4 
1014
'''

import sys
input = sys.stdin.readline

n = input().rstrip()
hex_dic = {'a' : 10, 'b' : 11, 'c' : 12, 'd' : 13, 'e' : 14, 'f' : 15}
if n[:2] == '0x':
    n = n[2:]
    idx = len(n) - 1
    jdx = 0
    ans = 0
    while idx >= 0:
        now = n[idx]
        if n[idx] in hex_dic:
            now = hex_dic[now]
        else:
            now = int(now)
        ans += now * 16**jdx
        jdx += 1
        idx -= 1
    print(ans)

elif n[:1] == '0':
    n = n[1:]
    idx = len(n) - 1
    jdx = 0
    ans = 0
    while idx >= 0:
        now = int(n[idx])
        ans += now * 8**jdx
        jdx += 1
        idx -= 1
    print(ans)

else:
    print(n)