def solution(grid):
    answer = []
    xL = len(grid[0])
    yL = len(grid)
    total = xL*yL
    
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    
    checked = []
    change = {'L' : [3, 2, 0, 1], 'R' : [2, 3, 1, 0], 'S' : [0, 1, 2, 3]}
    
    for x in range(xL):
        for y in range(yL):
            for i in range(4):
                
                if (x, y, i) in checked:
                    continue
                
                route = [(x, y, i)]
                
                while True:
                    x += dx[i]
                    y += dy[i]
                    print(x, y)
                    if x == xL:
                        x = 0
                    if x == -1:
                        x = xL - 1
                    if y == yL:
                        y = 0
                    if y == -1:
                        y = yL - 1
                    print('changed', x, y)
                    cmd = grid[y][x]
                    i = change[cmd][i]
                    if (x, y, i) in route:
                        answer.append(len(route))
                    else:
                        route.append((x,y,i))
                    
    return answer

grid = ["SL","LR"]
solution(grid)
