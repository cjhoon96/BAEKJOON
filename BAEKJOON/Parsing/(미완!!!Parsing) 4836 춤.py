'''
https://www.acmicpc.net/problem/4836
춤 출처다국어
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
1 초	128 MB	141	43	37	39.362%
문제
창영이는 요즘 춤을 배우고 있다. 창영이는 다음과 같은 규칙을 따라서 춤을 추어야 한다.

dip은 jiggle을 춘 다음이나 다다음, 또는 twirl을 추기 전에 출 수 있다. 예를 들면 다음과 같다.
...jiggle dip...
...jiggle stomp dip...
...dip twirl...
모든 춤은 clap stomp clap으로 끝나야 한다.
만약 twirl을 췄다면, hop도 춰야한다.
jiggle로 춤을 시작할 수 없다.
반드시 dip을 춰야 한다.
창영이가 춘 춤이 주어졌을 때, 위의 규칙을 지켰는지 아닌지를 알아내는 프로그램을 작성하시오.

입력
입력은 여러개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 창영이가 춘 춤이 주어진다. 각 춤은 1000스텝을 넘지 않는다. 각 스텝 알파벳 소문자로 이루어져 있고, 100글자를 넘지 않는다.

출력
창영이의 춤이 규칙을 모두 지켰다면, "form ok: "를 출력하고 입력으로 주어진 춤을 출력한다.

창영이의 춤이 규칙을 1개만 어겼다면, "form error K: "를 출력하고 입력으로 주어진 춤을 출력한다. 여기서 K는 창영이가 어긴 규칙의 번호이다.

창영이의 춤이 규칙을 여러개 어겼다면, "form errors K(1), K(2), ..., K(N-1) and K(N): "을 출력하고 입력으로 주어진 춤을 출력한다. K(i)는 창영이가 어긴 규칙의 번호이고, 오름차순이다.

창영이가 1번 규칙을 어겼다면, 입력으로 주어진 춤을 출력할 때, 규칙에 어긋난 dip을 대문자로 출력한다.

예제 입력 1 
dip twirl hop jiggle hop hop clap stomp clap
dip hop jiggle hop hop clap stomp clap
dip twirl hop jiggle hop hop clap clap stomp
jiggle dip twirl hop jiggle hop hop clap stomp clap
jiggle dip
jiggle
dip twirl hop dip jiggle hop dip hop clap stomp clap
예제 출력 1 
form ok: dip twirl hop jiggle hop hop clap stomp clap
form error 1: DIP hop jiggle hop hop clap stomp clap
form error 2: dip twirl hop jiggle hop hop clap clap stomp
form error 4: jiggle dip twirl hop jiggle hop hop clap stomp clap
form errors 2 and 4: jiggle dip
form errors 2, 4 and 5: jiggle
form error 1: dip twirl hop DIP jiggle hop dip hop clap stomp clap
출처
ICPC > Regionals > North America > Rocky Mountain Regional > 2008 Rocky Mountain Regional Contest E번

문제를 번역한 사람: baekjoon
'''

while True:
    dance_string = input().rstrip()
    if dance_string == '':
        break

    dance = list(dance_string.split())
    error = []
    dip = False
    twirl = False
    hop = False

    n = len(dance)
    for i in range(n):

        pose = dance[i]

        if pose == 'twirl':
            twirl = True
        
        if pose == 'hop':
            hop = True

        if 1 not in error and pose == 'dip':
            dip = True
            if not (i - 1 >= 0 and dance[i - 1] == "jiggle") and not (i - 2 >= 0 and dance[i - 2] == "jiggle") and not (i + 1 < n and dance[i + 1] == 'twirl'):
                error.append(1)

        if 4 not in error and i == 0 and pose == 'jiggle':
            error.append(4)

    if twirl and not hop:
        error.append(3)

    if not dip:
        error.append(5)
    if n < 3 or dance[n-3: n] != ['clap', 'stomp', 'clap']:
        error.append(2)
    print(error, '!!!!')
    if error:
        error.sort()
        m = len(error)
        if m == 1:
            error_txt = 'form error ' + str(error[0]) + ':'
        elif m == 2:
            error_txt = 'form error ' + str(error[0]) + ' and ' + str(error[1]) + ':'
        else:
            error_txt = 'form error ' + str(error[0])
            for i in range(1, m-1):
                error_txt += ', ' + error[i]
            
            error_txt += ' and ' + error[m-1]
        
        print('!!!!',error_txt, dance_string)
    
    else:
        print('!!!form ok:')