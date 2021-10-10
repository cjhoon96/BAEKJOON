lst = list(map(int,input().split()))

n = len(lst)

Power_set = []

for i in range(1 << n):
    print(i)
    sub_set = []
    for j in range(n):
        if i & (1 << j):
            print('i & (1 << j) ==> ', i, ' & ', (1 << j), '=', i & (1 << j))
            sub_set.append(lst[j])
        else:
            print(i & (1 << j), '!!!')
    Power_set.append(sub_set)

print(Power_set)