from collections import deque
import time
start = time.time()  # 시작 시간 저장

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

maxi = 0

def bfs(a, b, room):
    global maxi
    queue = deque()
    queue.append((a, b, set([(a,b)]), True))

    while queue:
        x, y, visited, possible = queue.popleft()
        added = False
        now = room[y][x]

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < 5 and 0 <= ny < 5:
                next = room[ny][nx]
                if (nx,ny) not in visited:
                    if now < next:
                        queue.append((nx, ny, visited | set([(nx,ny)]), possible))
                        added = True
                    
                    elif possible:
                        queue.append((nx, ny, visited | set([(nx,ny)]), False))
                        added = True
        if not added:
            maxi = max(maxi, len(visited))


def solution(room):
    global maxi
    for y in range(5):
        for x in range(5):
            bfs(x, y, room)

    print(maxi)

solution([[1, 2, 20, 20, 20], [20, 3, 4, 5, 20], [20, 20, 5, 6, 20], [20, 1, 6, 7, 8], [20, 2, 7, 8, 9]])
solution([[1, 2, 20, 20, 20], [20, 3, 4, 5, 20], [20, 20, 5, 6, 20], [2, 1, 6, 7, 8], [3, 4, 7, 8, 9]])

print("time :", time.time() - start)