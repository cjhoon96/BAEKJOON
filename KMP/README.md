# **KMP 알고리즘**

### 문자열 text의 부분 문자열 중에 target_text가 있는지 탐색하기 위해
```python
target_text = input()
text = input()

cnt = 0

for i in range(len(text) - len(target_text)):
    for j in range(len(target_text)):
        if text[i+j] == target[j]:
            continue
        else:
            break

    else:
        cnt += 1
        print('Found %d target_text' %cnt)

```
### 를 사용할 때 len(target_text) = K, len(text) = N 이라 할 경우 시간 복잡도는 O(NK) 가 된다.
### 즉 두 문자열이 길어질 수록 연산량은 기하급수적으로 늘어나게 된다.


## **KMP 알고리즘**

### **위 과정을 즉 문자열 탐색을 더 효율적으로 하기 위한 알고리즘이 KMP알고리즘이다.**
### KMP 알고리즘을 사용하기 위해서는 찾고자 하는 target_text를 전처리 하는 과정이 필요하다.

### 이 전처리 과정에서는 target_text 속의 작은 패턴을 분석한다.
## * Prefix/Suffix and LPS(Longest proper prefix which is suffix)
```python
target_text = 'ABCXAB'
```
### 인 경우
### Prefix(접두어)는 **A, AB, ABC, ABCX, ABCXA**가 가능하다.
### Suffix(접미어)는 **B, AB, XAB, CXAB, BCXAB**가 가능하다.
### LPS 알고리즘은 Prefix와 Suffix 중 서로 같으면서 길이가 가장 긴 길이를 찾아내는 것으로 이 경우 **AB**가 이에 해당된다.

## * 파이썬을 사용한 LPS 구현
```python
target_text = input()
K = len(target_text)

lps = [0 for _ in range(K)]

def LPS(text, lps):
    length = 0
    i = 1
    while i < len(text):
        if text[i] == text[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1

```
### 코드를 분석해 보면 
```python
target_text = 'ABCXABA'
```
### 인 경우 K = 7, lps = [0, 0, 0, 0, 0, 0, 0] 으로 초기화 된다.
### 이후 함수가 실행 되면 

### 1. i = 1, length = 0 이므로 text[i] = 'B' text[length] = 'A' 가 서로 달라 else문이 실행되고 length 가 0 이므로 그중에서도 lps[i] = 0 i += 1 이 실행된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 0 | 0 | 0 |

| i | length |
|---|---|
| 2 | 0 |

### 2. i = 2, length = 0 이므로 text[i] = 'C' text[length] = 'A' 가 서로 다르며 lenght = 0 이므로 다시 else 문의 else 문 lps[i] = 0 i += 1 이 실행된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 0 | 0 | 0 |

| i | length |
|---|---|
| 3 | 0 |

### 3. i = 3, length = 0 이므로 text[i] = 'X' text[length] = 'A' 가 서로 다르며 lenght = 0 이므로 다시 else 문의 else 문 lps[i] = 0 i += 1 이 실행된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 0 | 0 | 0 |

| i | length |
|---|---|
| 4 | 0 |

### 3. i = 4, length = 0 이므로 text[i] = 'A' text[length] = 'A' 가 서로 같아 length += 1 , lps[i] = length , i += 1 이 실행된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 1 | 0 | 0 |

| i | length |
|---|---|
| 5 | 1 |

### 4. i = 5, length = 1 이므로 text[i] = 'B' text[length] = 'B' 가 서로 같아 length += 1 , lps[i] = length , i += 1 이 실행된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 1 | 2 | 0 |

| i | length |
|---|---|
| 6 | 2 |

### 5. i = 6, length = 2 이므로 text[i] = 'A' text[length] = 'C' 가 서로 다르며 length 가 0 이 아니므로 length = lps[length - 1] 가 실행된다. (i가 증가 하지 않아 다시 while 문이 실행된다.)

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 1 | 2 | 0 |

| i | length |
|---|---|
| 6 | 0 |

### 6. i = 6, length = 0 이므로 text[i] = 'A' text[length] = 'A' 가 서로 같아 length += 1 , lps[i] = length , i += 1 이 실행된다. 이후 while 문을 탈출하게 된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
|lps[i]| 0 | 0 | 0 | 0 | 1 | 2 | 1 |

| i | length |
|---|---|
| 7 | 1 |

### **결론적으로 코드 실행 후 lps = [0, 0, 0, 0, 1, 2, 1] 이 된다.**
