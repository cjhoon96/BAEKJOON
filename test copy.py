n = int(input())

scr = list(map(int,input().split()))

m = max(scr)

S = 0

for i in scr:
    S += i / m * 100

print(S/n)