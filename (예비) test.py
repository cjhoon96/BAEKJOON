import sys
input = sys.stdin.readline

n, m = map(int,input().split())

off_brand = []

lst = []

for _ in range(n):
    lst.append(input().rstrip())

for _ in range(m):
    now = input().rstrip()

    if now in lst:
        off_brand.append(now)

off_brand.sort()

print(len(off_brand))

for i in off_brand:
    print(i)
