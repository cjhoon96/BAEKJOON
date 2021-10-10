n, r = map(int,input().split())
lst = list(map(int,input().split()))

def Combi(n, r, arr):
    Combinations = []

    for i in range(1 << n):
        print(i)
        combi = []
        added = 0
        skip = 0
        for j in range(n):
            if i & (1 << j):
                combi.append(arr[j])
                added += 1
            
            else:
                skip += 1

            if added > r or skip > n - r:
                break
        else:
            Combinations.append(combi)
    
    return Combinations

print(Combi(n, r, lst))