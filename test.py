def solution(v):
    x_set = set()
    y_set = set()
    for x,y in v:
        print(x,y)
        if x in x_set:
            x_set.remove(x)
        else:
            x_set.add(x)
        if y in y_set:
            y_set.remove(y)
        else:
            y_set.add(y)
    
    answer = [x_set.pop(),y_set.pop()]

    return answer

print(solution([[1, 1], [2, 2], [1, 2]]))