import heapq
import sys
input = sys.stdin.readline

N, M, A, B, C = map(int,input().split())

graph = [[] for _ in range(N + 1)]

for _ in range(M):
    a, b, c = map(int,input().split())
    graph[a].append((b,c))
    graph[b].append((a,c))

arrived = False

visited = [1e9 for _ in range(N+1)]
visited[A] = 0
q = []

q.append((0, 0, A))

while q:
    shame, t_c, now= heapq.heappop(q)
    max_shame = shame
    
    if visited[next] <= maxi:
        continue
    visited[next] = maxi
    
    if now == B:
        arrived = True
        Shame = shame
        break

    if visited[now] != shame:
        continue

    for next, cost in graph[now]:
        if t_c + cost > C:
            continue
        maxi = max((shame, cost))
        if shame < cost:
            max_shame = cost
        print(now,next,visited)
        
        heapq.heappush(q, (max_shame, t_c + cost, next))

if arrived:
    print(Shame)

else:
    print(-1)

'''
5 5 1 5 10
1 2 5
1 3 1
2 4 2
3 4 6
4 5 1


6 6 1 6 11
1 2 5
2 3 5
1 4 6
3 5 1
4 5 2
5 6 1

'''