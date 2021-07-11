def make_bi(a):
    bi = ''
    while a != 0:
        bi += str(a % 2)
        a //= 2
    bi = bi[::-1]
    lenth = len(bi)

    if lenth < 8:
        bi = '0' * (8 - lenth) + bi

    return bi

print(make_bi(5110699119940114000))

'''
5 5 1 5 10
1 2 5
1 3 1
2 4 2
3 4 6
4 5 1

'''