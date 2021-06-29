'''
https://www.acmicpc.net/problem/9239
스티브 잡숭 실패출처다국어
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	128 MB	269	35	30	17.045%
문제
스티브 잡숭은 남들 앞에서 발표할 때, 수학 트릭을 이용해 청중의 관심을 끌어모은다.

첫 번째로 어떤 수의 제곱근이 그 수의 절반 뒷 부분이라는 트릭 (, )을 말하고, 그 다음에는 어떤 수에 X = 2.6을 곱하면, 그 수의 첫 자리를 맨 뒷자리로 보낸 수가 된다는 트릭을 말한다. (, )

사람들은 두 번째 트릭에 열광했고, 잡숭은 X = 2.6을 제외한 다른 숫자를 찾으려고 한다.

X가 주어졌을 때, X를 곱했을 때, 결과가 원래 숫자의 첫 자리를 맨 뒷자리로 보낸 수가 되는 모든 숫자를 찾는 프로그램을 작성하시오.

입력
첫째 줄에 X (1 ≤ X < 1000)가 주어진다. X는 최대 소수점 4째 자리까지 주어진다.

출력
108보다 작은 모든 자연수 중에 X를 곱했을 때 결과가 원래 숫자의 첫 번째 자리를 맨 뒷자리로 보낸 수가 되는 모든 숫자를 한 줄에 하나씩 증가하는 순서대로 출력한다.

만약, 그러한 수가 없는 경우에는 No solution을 출력한다.

예제 입력 1 
2.6
예제 출력 1 
135
270
135135
270270
'''


from math import gcd

X = float(input())

if X >= 10:
    print('No solution')
    
else:
    x = str(X)
    if x.find('.') != -1:
        f = len(x) - x.find('.') -1
        nume = int(X*(10**f))
        deno = 10**f
        d = gcd(nume, deno)
        nume //= d
        deno //= d
    else:
        nume = int(X)
        deno = 1
    
    
    i = deno
    cnt = 0
    while i < 1e8:
        re_i = int(str(i)[1:] + str(i)[0])

        if int(i*X) == re_i:
            print(i)
            cnt += 1
            
        i += deno
        if int(i*X) >= 1e8:
            break

    if cnt == 0:
        print('No solution')

