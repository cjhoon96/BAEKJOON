'''
https://www.acmicpc.net/problem/11726
2×n 타일링 성공
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	256 MB	84361	31485	22954	35.054%
문제
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.



입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

예제 입력 1 
2
예제 출력 1 
2
예제 입력 2 
9
예제 출력 2 
55
'''

dic={1:1,2:2}
def solution(n):
    if n in dic:
        return dic[n]
    else:
        dic[n]=solution(n-1)+solution(n-2)
    return dic[n]%10007
print(solution(int(input())))