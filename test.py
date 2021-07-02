from collections import deque

queue = deque()

a = ['a','b','c']

queue.append(a)

b, c, d = queue.popleft()

print(b,c,d)