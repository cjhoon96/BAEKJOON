n = int(input())
a = list(map(int, input().split()))
c = [0] * 1001
for i in range(n): 
    c[a[i]] = max(c[:a[i]]) + a[i]
    print(c)
print(max(c))

'''
5 5 1 5 10
1 2 5
1 3 1
2 4 2
3 4 6
4 5 1

'''