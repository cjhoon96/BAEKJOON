# 부분집합 구현
## 비트연산자의 활용
```python
lst = list(map(int,input().split()))

n = len(lst)

Power_set = []

for i in range(1 << n):
    print(i)
    sub_set = []
    for j in range(n):
        if i & (1 << j):
            print('i & (1 << j) ==> ', i, ' & ', (1 << j), '=', i & (1 << j))
            sub_set.append(lst[j])
        else:
            print(i & (1 << j), '!!!')
    Power_set.append(sub_set)

print(Power_set)
```

첫번째 for문의 range(1 << n) 을 통해 해당 범위내의 이진법들을 돌며 부분 집합들을 만든다.
각 이진수는 각 자리수와 매칭 되는 원소의 포함 관계를 나타낸다.
예로 [1, 2, 3]의 경우 이진수가 0 0 1인 경우 0번째 인덱스에 해당하는 1만을 포함하는 경우라고 볼 수 있다.
두번째 for문에서는 0 0 1, 0 1 0, 1 0 0 과 같은 하나의 자리수만 1인 이진수를 만들어 첫번째 for문을 통해 만들어진 이진수와의 &연산자를 통해 각 자리수에 매치 되는 인덱스의 원소가 포함되었는지 확인후 포함 된 경우 sub_set에 추가시킨다.
두번째 for문을 모두 돌아 만들어진 sub_set을 Power_set에 포함시킨다.

각 인덱스의 원소가 해당 인덱스의 원소의 포함관계를 0과 1로 구분하도록 만들어진 list와 같은 원리


# Combinations 구현

