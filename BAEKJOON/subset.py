lst = list(int,input().split())

P = [set()]
last = [set()]

i  = 1
while i <= len(lst):
    now = []
    for s in last:
        for i in lst:
            if i not in s:
                now.append(s|set(i))
    P += now
    last = now

print(P)