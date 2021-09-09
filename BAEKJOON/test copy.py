def solution(grid):
    answer = []
    xL = len(grid[0])
    yL = len(grid)
    
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    
    visited = [[[0, 0, 0, 0] for x in range(xL)] for y in range(yL)]
    change = {'L' : [3, 2, 0, 1], 'R' : [2, 3, 1, 0], 'S' : [0, 1, 2, 3]}
    
    for x in range(xL):
        for y in range(yL):
            for i in range(4):
                if visited[y][x][i]:
                    continue
                    
                visited[y][x][i] = 1
                    
                route = 0
                
                while True:
                    print(visited)
                    x += dx[i]
                    y += dy[i]

                    if x == xL:
                        x = 0
                    if x == -1:
                        x = xL - 1
                    if y == yL:
                        y = 0
                    if y == -1:
                        y = yL - 1
                    print(x,y,i)    
                    cmd = grid[y][x]
                    i = change[cmd][i]
                    if visited[y][x][i]:
                        answer.append(route)
                        break
                    else:
                        route += 1
    answer      
    return answer

grid = ["SL","LR"]
print(solution(grid))