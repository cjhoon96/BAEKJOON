'''
https://www.acmicpc.net/problem/9215
신나는 분수 계산 출처다국어
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	128 MB	77	36	29	54.717%
문제
유리수는 두 정수의 비로 나타낼 수 있다. 분자(n)와 분모(d)가 주어지면 이 분수를 n/d으로 쓴다. 유리수의 표현 방법은 유일하지 않다. 예를 들어, 1/2과 2/4는 그 값이 같다. 어떤 유리수 표현법 n/d이 gcd(|n|, |d|) = 1이라면 이것이 "기약분수로 표현되었다"라고 한다. 따라서 1/2은 기약분수로 표현되었지만 2/4는 아니다.

유리수의 덧셈은 다음과 같이 정의된다. 오른쪽 항이 기약분수로 표현될 필요는 없다는 점에 주목하라.

 
 
 

분자가 분모보다 크거나 같은 유리수는 대분수 꼴로 표현할 수 있는데, 이것은 정수부와 소수부로 이루어 진다. 예를 들어, 
 
은 16/3과 같은 값을 가지는 대분수 표현이다.

당신이 할 일은 유리수열을 읽어 그 합을 출력하는 것이다.

입력
입력은 몇 개의 테스트로 구성된다. 각 테스트의 정보는 첫 줄에 n(1 ≤ n < 1000)을 포함한다. n = 0인 경우 입력이 끝난다.

다음 n개의 줄은 공백이 없는 하나의 문자열이다. 각 문자열은 유리수 하나를 나타내며, 다음 세 형태 중 하나이고 기약분수로 표현되지 않을 수 있다 (w, n과 d는 정수이다: 0 ≤ w,n < 1000, 1 ≤ d < 1000).

w,n/d: (w * d + n) / d와 값이 같은 대분수
n/d: 정수부가 0인 유리수
w: 소수부가 0인 정수
출력
출력은 화면에 나온 대로 테스트 번호를 포함하여 합을 출력한다. 만약 합의 정수부나 소수부가 없다면 각 부분을 생략하여 출력한다. 특수한 경우로, 정수부와 소수부가 모두 없다면 0을 출력해야 한다.

예제 입력 1 
2
1/2
1/3
3
1/3
2/6
3/9
3
1
2/3
4,5/6
0
예제 출력 1 
Test 1: 5/6
Test 2: 1
Test 3: 6,1/2
출처
ICPC > Regionals > South Pacific > South Pacific Region > Australian Programming Contest > AuPC 2013 C번

문제를 번역한 사람: kipa00
'''
from fractions import Fraction
import sys
input = sys.stdin.readline

i = 1
while True:
    n = int(input().rstrip())
    if n == 0:
        break
    w = 0
    a = Fraction(0,1)
    for _ in range(n):
        b = input().rstrip()
        if ',' in b:
            ex, b = b.split(',')
            ex = int(ex)
            n, d = map(int, b.split('/'))
        elif '/' in b:
            ex = 0
            n, d = map(int, b.split('/'))
        else:
            ex = int(b)
            n, d = 0, 1
        w += ex
        a = a + Fraction(n,d)

    nume = a.numerator
    deno = a.denominator
    
    w += nume // deno
    nume %= deno

    if w > 0:
        if nume != 0:
            print('Test %d: %d,%d/%d' %(i, w, nume, deno))
        else:
            print('Test %d: %d' %(i, w))
    else:
        if nume != 0:
            print('Test %d: %d/%d' %(i, nume, deno))
        else:
            print('Test %d: %d' %(i, 0))
    i += 1