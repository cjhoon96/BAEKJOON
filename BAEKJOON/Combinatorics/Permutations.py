def permu(r, arr):
    Permutations = []
    visited = [0 for _ in range(len(arr))]
    n = len(arr)
    def recursion(per, used):
        if len(per) == r:
            Permutations.append(per)
            return
        
        else:
            for i in range(n):
                if not used[i]:
                    new_used = used.copy()
                    new_used[i] = 1
                    recursion(per + [arr[i]], new_used)
    
    recursion([], visited)
    return Permutations

print(permu(3, [1, 2, 3, 4]), len(permu(3, [1, 2, 3, 4])))




def permutation(arr, r):
    if len(result) == r:
        print(result)
        return
    
    for i in range(len(arr)):
        if not used[i]:
            result.append(arr[i])
            used[i] = True
            #방문처리 한후 (평행 세계와 비슷) ==> 이를 응용하여 경로도 만들 수 있음
            permutation(arr, r)
            result.pop()
            used[i] = False
            #다시 원래대로 복구한다.

result = []
used = [False] * 4
permutation([1, 2, 3, 4], 3)