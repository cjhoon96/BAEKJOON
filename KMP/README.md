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


## * **KMP 알고리즘**

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

## * **KMP 알고리즘** 
### 다시 KMP알고리즘을 살펴보자
### * KMP 알고리즘 python 구현
```python
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

def KMP(target_text, text):
    N = len(text)
    K = len(target_text)

    lps = [0 for _ in range(K)]

    LPS(target_text, lps)

    i, j = 0, 0

    while i < N:
        if j < K and target_text[j] == text[i]:
            i += 1
            j += 1
        
        elif target_text[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            
            else:
                i += 1
        
        if  j == K:
            print("found pattern at index" + str(i - j))
            j = lps[j-1]
```
### 코드를 보면 KMP 알고리즘과 LPS 알고리즘과 유사한 것을 볼 수 있다.

* 현재 보고있는 target_text 의 인덱스 j와 text 의 인덱스 의 문자가 같은 경우 i와 j를 다음 인덱스로 바꾼다.
* 현재 보고 있는 target_text 의 인덱스 j와 text 의 인덱스 의 문자가 다른 경우
    * 탐색중인 target_text 의 인덱스가 0 이 아니라면  j를 
    


## * 예제 1
LPS 를 보기 위해 사용하였던 예를 줄여서 가져와 보자
target_text = 'ABCXAB' , text = 'ABCXABABXCAB' 라 하면 우선 lps = [0, 0, 0, 0, 1, 2] 이 된다.
while 문 

1. **i = 0 j = 0** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.  

    | i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    |---|---|---|---|---|---|---|---|---|---|---|
    |text| **A** | B | C | X | A | B | X | C | A | B |
    |target_text| **A** | B | C | X | A | B |  |  |  |  |

2. **i = 1 j = 1** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.  

    | i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    |---|---|---|---|---|---|---|---|---|---|---|
    |text| A | **B** | C | X | A | B | X | C | A | B |
    |target_text| A | **B** | C | X | A | B |  |  |  |  |
.  
.  
.  
6. **i = 5 j = 5** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.  

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | A | **B** | X | C | A | B |
|target_text| A | B | C | X | A | **B** |  |  |  |  |

7. **i = 6 j = 6** j 가 target_text 길이를 벗어났으므로 if 문과 elif문을 건너 뛰고 j = K 이므로   **found pattern at index 0** 즉 인덱스 text 0~5까지가 target_text와 같음을 출력한다. 이후 j = lps[j-1] 즉 lps[5] 즉 2가 된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | A | B | **X** | C | A | B |
|target_text| A | B | C | X | A | B | **=>** |  |  |  |

이 예제에서 target_text 의 4,5인덱스가 text의 4,5 인덱스와 같았다는 점은 위 과정을 통해 확인 되었고 lps 리스트를 통해 길이가 2인  Prefix와 Suffix가 같음을 알 수 있다.  
이는 즉 (text의 4,5 인덱스) = (target_text의 4,5 인덱스) = (target_text의 0,1 인덱스) 는 자명하게 되므로 text의 인덱스 6, target_text의 인덱스 2 부터 다시 비교를 시작하였음을 알 수 있다.  

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | A | B | **X** | C | A | B |
|target_text|  |  |  |  | A | B | **C** | X | A | B |

8. **i = 7 j = 2** target_text[j]와  text[i]가 다르기 때문에 elif문이 실행, j가 0이 아니므로 j = lps[j - 1] 즉 lps[1] = 0 으로 바꾼다.(**좀더 특수한 예제는 다음 예제를 통해 살펴보자**)
9. **i = 8 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.
10. **i = 9 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.

이후 i 가 10 이되어 탐색이 종료된다.


## * 예제 2
이번에는 target_text = 'ABABAB' , text = 'ABABABABXC' 인 경우를 보자 
우선 lps = [0, 0, 1, 2, 3, 4] 이 된다.

while 문 
1. **i = 0 j = 0** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.
    | i | **0** | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    |---|---|---|---|---|---|---|---|---|---|---|
    |text| **A** | B | A | B | A | B | A | B | X | C |
    |target_text| **A** | B | A | B | A | B |  |  |  |  |  |
2. **i = 1 j = 1** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.
    | i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    |---|---|---|---|---|---|---|---|---|---|---|
    |text| A | B | C | X | A | B | X | C | A | B |
    |target_text| A | B | C | X | A | B |  |  |  |  |  |
.  
.  
.  
6. **i = 5 j = 5** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.
    | i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    |---|---|---|---|---|---|---|---|---|---|---|
    |text| A | B | C | X | A | B | X | C | A | B |
    |target_text| A | B | C | X | A | B |  |  |  |  |  |
7. **i = 6 j = 6** j 가 target_text 길이를 벗어났으므로 if 문과 elif문을 건너 뛰고 j = K 이므로   **found pattern at index 0** 즉 인덱스 text 0~5까지가 target_text와 같음을 출력한다. 이후 j = lps[j-1] 즉 lps[5]
8. **i = 7 j = 7** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.
9. **i = 8 j = 8** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.
10. **i = 9 j = 9** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.