'''
https://www.acmicpc.net/problem/1213
팰린드롬 만들기
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	7228	2596	2152	35.700%
문제
임한수와 임문빈은 서로 사랑하는 사이이다.

임한수는 세상에서 팰린드롬인 문자열을 너무 좋아하기 때문에, 둘의 백일을 기념해서 임문빈은 팰린드롬을 선물해주려고 한다.

임문빈은 임한수의 영어 이름으로 팰린드롬을 만들려고 하는데, 임한수의 영어 이름의 알파벳 순서를 적절히 바꿔서 팰린드롬을 만들려고 한다.

임문빈을 도와 임한수의 영어 이름을 팰린드롬으로 바꾸는 프로그램을 작성하시오.

입력
첫째 줄에 임한수의 영어 이름이 있다. 알파벳 대문자로만 된 최대 50글자이다.

출력
첫째 줄에 문제의 정답을 출력한다. 만약 불가능할 때는 "I'm Sorry Hansoo"를 출력한다. 정답이 여러 개일 경우에는 사전순으로 앞서는 것을 출력한다.

예제 입력 1 
AABB
예제 출력 1 
ABBA
'''

name = input()
l = len(name)

alpha_set = set(name)

even_dic = {}

even_lst = []

odd_lst = []

check = True

while alpha_set:
    
    a = alpha_set.pop()
    cnt = name.count(a)
    
    if cnt % 2 == 0:
        even_lst.append(a)
        even_dic[a] = cnt
    
    elif cnt == 1:
        odd_lst.append(a)
    
    else:
        odd_lst.append(a)
        even_lst.append(a)
        even_dic[a] = cnt - 1
    
    if len(odd_lst) > 1:
        check = False
        break

print(even_lst)
print(even_lst)
if check:
    even_lst.sort(reverse = True)

    if odd_lst:
        palindrome = odd_lst[0]
    else:
        palindrome = ''
    for i in even_lst:
        palindrome = i*(even_dic[i] // 2) + palindrome + i*(even_dic[i] // 2)
    
    print(palindrome)

else:
    print("I'm Sorry Hansoo")



