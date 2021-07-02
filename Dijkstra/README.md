# Dijkstra 알고리즘
___

## 1. 모든 노드의 거리를 INF로 초기화
    ```python
    INF = 1e9
    dists = [INF for i in range(N + 1)] # 노드의 좌표를 인덱스로 바로 받을 수 있도록 길이를 N+1 로 잡는다.
    ```

## 2. 출발노드의 dists를 0으로 변경, 힙에 출발 노드를 저장 
    ```python
    dists[start] = 0
    heapq.heappush(q, (dists[start], start))
    ```
## 3. while 문 시작
    1. ### heapq를 통해 가장 작은 거리와 그 노드를 추출
    2. ### 현재 보는 거리가 해당 노드의 dists에 저장 된 갑 보다 크다면 continue를 통해 1로 돌아감
    3. ### 2의 경우가 아니라면 for 문을 통해 그래프에서 현재 보고 있는 노드에 연결된 노드와 그 거리를 하나씩 추출
    3. ### 각 인접노드들의 dists에 저장된 거리와 현재노드를 거쳐 이동할때의 거리를 비교후 후자가 더 작다면 dists를 갱신 후 q에 해당 인접 노드와 갱신된 거리를 저장
    4. ### 3-1로 돌아가 q가 빌 때까지 반복



```python

import heapq
import sys
input = sys.stdin.readline
INF = 1e9

N, M = map(int,input().split())                         # 노드의 개수 N 간선의 개수 M을 입력받기

start = int(input())                                    # 시작 노드 입력 받기

graph = [[] for _ in range(N + 1)]                      # 노드의 좌표를 인덱스로 바로 받을 수 있도록 길이를 N+1 로 잡는다.

for _ in range(M):
    a, b, c = map(int,input().split())                  # a에서 b로 갈때의 거리 c(ost)를 입력 받아 graph에 저장한다.
    graph[a].append((b,c))                              # 양방향인 경우 graph[b].append((a,c))도 추가

dists = [INF for i in range(N + 1)]                     # 1번 노드의 좌표를 인덱스로 바로 받을 수 있도록 길이를 N+1 로 잡는다.

def dijkstra(start):
    q = list()

    dists[start] = 0                                    # 2번
    heapq.heappush(q, (dists[start], start))

    while q:                                            # q가 비어 있지 않은 동안

        now_dist, now_node = heapq.heappop(q)           # 3-1

        if dists[now_node] = now_dist:                  # 3-2
            continue

        for i in graph[now_node]:
            cost = now_dist + i[1]                      # 3-3
            if cost < dists[i[0]]:
                dists[i[0]] = cost
                heapq.heappus(q, (cost, i[0]))

dijkstra(start)

print(dists)                                            # dists에는 start 노드부터 각 인덱스의 노드까지 가는 거리가 저장된다. 만약 거리가 INF 라면 해당 노드에 도달하지 못했다는 것이다.
```