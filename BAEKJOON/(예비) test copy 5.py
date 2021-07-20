import sys
input = sys.stdin.readline

n, k, p, x = map(int,input().split())

lst = []
lst.append((0, 4, 3, 3, 4, 3, 2, 3, 1, 2))
lst.append((4, 0, 5, 3, 2, 5, 6, 1, 5, 4))
lst.append((3, 5, 0, 2, 5, 4, 3, 4, 2, 3))
lst.append((3, 3, 2, 0, 3, 2, 3, 2, 2, 1))
lst.append((4, 2, 5, 3, 0, 3, 4, 3, 3, 2))
lst.append((3, 5, 4, 2, 3, 0, 1, 4, 2, 1))
lst.append((2, 6, 3, 3, 4, 1, 0, 5, 1, 2))
lst.append((3, 1, 4, 2, 3, 4, 5, 0, 4, 3))
lst.append((1, 5, 2, 2, 3, 2, 1, 4, 0, 1))
lst.append((2, 4, 3, 1, 2, 1, 2, 3, 1, 0))

maxi = 10**k

def decomp(a):
    a_decomposition = []
    de = 10**(k-1)
    while de >= 1:
        a_decomposition.append(a // de)
        a %= de
        de //= 10
    return a_decomposition

x_decomp = decomp(x)

cnt = 0

for now in range(1, n + 1):
    if now == x:
        continue
    now = decomp(now)
    print(now, x_decomp)
    rvrse = 0
    for a,b in zip(x_decomp, now):
        rvrse += lst[a][b]
        print(a,b, lst[a][b], lst[b][a])
        if rvrse > p:
            break
    else:
        cnt += 1

print(cnt)