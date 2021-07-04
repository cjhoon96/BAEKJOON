from collections import deque

a = deque(list(input()))

b = a.popleft()
a.append(1)

print(a,b)