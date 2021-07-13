a = 'abcdefghijklmnopqrstuvwxyz'
b = input()
for i in a:
    if i in b:
        print(b.count(i), end = ' ')
    else:
        print(-1, end = ' ')
'''
5 5 1 5 10
1 2 5
1 3 1
2 4 2
3 4 6
4 5 1

'''