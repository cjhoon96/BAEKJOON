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

___

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

___

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
            print("found target_text at index" + str(i - j))
            j = lps[j-1]
```
### 코드를 보면 KMP 알고리즘과 LPS 알고리즘과 유사한 것을 볼 수 있다.

* 현재 보고있는 target_text 의 인덱스 j와 text 의 인덱스 의 문자가 같은 경우 i와 j를 다음 인덱스로 바꾼다.
* 현재 보고 있는 target_text 의 인덱스 j와 text 의 인덱스 의 문자가 다른 경우
    * 탐색중인 target_text 의 인덱스가 0 이 아니라면  j를 lps[j-1] 로 바꿔준 후 다시 text의 i와 비교한다.
    * 탐색중인 target_text 의 인덱스가 0 이라면 i만 1 증가시킨다.
    
___

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

7. **i = 6 j = 6** j 가 target_text 길이를 벗어났으므로 if 문과 elif문을 건너 뛰고 j = K 이므로   **found target_text at index 0** 즉 인덱스 text 0~5까지가 target_text와 같음을 출력한다. 이후 j = lps[j-1] 즉 lps[5] = 2가 된다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | A | B | **X** | C | A | B |
|target_text| A | B | C | X | A | B | **=>** |  |  |  |

이 예제에서 target_text 의 4,5인덱스가 text의 4,5 인덱스와 같았다는 점은 위 과정을 통해 확인 되었고 lps 리스트를 통해 길이가 2인  Prefix와 Suffix가 같음을 알 수 있다.  
이는 즉 (text의 4,5 인덱스) = (target_text의 4,5 인덱스) = (target_text의 0,1 인덱스) 는 자명하게 되므로 text의 인덱스 6, target_text의 인덱스 2 부터 다시 비교를 시작하였음을 알 수 있다.
더욱이 인덱스 0과 5 사이에서 반복되는 패턴은 0,1과 4,5가  가장 길었으므로 중간의 인덱스 2,3 부터 비교하는 과정은 생략할 수 있다는 점을 알 수 있다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | **A** | **B** | X | C | A | B |
|target_text|  |  |  |  | **A** | **B** | C | X | A | B |

8. **i = 6 j = 2** target_text[j]와  text[i]가 다르기 때문에 elif문이 실행, j가 0이 아니므로 j = lps[j - 1] 즉 lps[1] = 0 으로 바꾼다.  이경우 i의 값은 변경하지 않아 바뀐 j와 다시 비교해 주는것을 볼 수 있다.
(**좀더 특수한 예제는 다음 예제를 통해 살펴보자**)

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | C | X | A | B | **X** | C | A | B |
|target_text|  |  |  |  | A | B | **C** | X | A | B |

9. **i = 6 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.
10. **i = 7 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.
11. **i = 8 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.
12. **i = 9 j = 0** target_text[j]와  text[i]가 다르고 j가 0이므로 i 의 인덱스만 1 증가 시킨다.

이후 i 가 10 이되어 탐색이 종료된다.


___

## * 예제 2
이번에는 target_text = 'ABABAB' , text = 'ABABABABXC' 인 경우를 보자 
우선 lps = [0, 0, 1, 2, 3, 4] 이 된다.

while 문 
1. **i = 0 j = 0** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| **A** | B | A | B | A | B | A | B | X | C |
|target_text| **A** | B | A | B | A | B |  |  |  |  |

2. **i = 1 j = 1** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | **B** | A | B | A | B | A | B | X | C |
|target_text| A | **B** | A | B | A | B |  |  |  |  |

.  
.  
.  
6. **i = 5 j = 5** target_text[j] = text[i] 이므로 i와 j 가 1씩 증가한다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | **B** | A | B | X | C |
|target_text| A | B | A | B | A | **B** |  |  |  |  |

7. **i = 6 j = 6** j 가 target_text 길이를 벗어났으므로 if 문과 elif문을 건너 뛰고 j = K 이므로   **found target_text at index 0** 즉 인덱스 text 0~5까지가 target_text와 같음을 출력한다. 이후 j = lps[j-1] 즉 lps[5] = 4

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | A | B | X | C |
|target_text| A | B | A | B | A | B | => |  |  |  |

이 예제의 경우 target_text 의 2,3,4,5 인덱스가 text의 2,3,4,5 인덱스와 원소가 같았다는 점은 위 과정을 통해 확인 되었고 lps 리스트를 통해 길이가 4인  Prefix와 Suffix가 같음을 알 수 있다.  
이는 즉 (text의 2,3,4,5 인덱스) = (target_text의 2,3,4,5 인덱스) = (target_text의 0,1,2,3 인덱스) 는 자명하게 되므로 text의 인덱스 6, target_text의 인덱스 4 부터 다시 비교를 시작하였음을 알 수 있다.
더욱이 인덱스 0과 5 사이에서 반복되는 패턴은 0,1과 4,5가  가장 길었으므로 중간의 인덱스 2,3 부터 비교하는 과정은 생략할 수 있다는 점을 알 수 있다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | **A** | **B** | **A** | **B** | A | B | X | C |
|target_text|  |  | **A** | **B** | **A** | **B** | A | B |  |  |

8. **i = 6 j = 4** target_text[j]와  text[i]가 같기 때문에 i 와 j를 1씩 증가 시킨다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | **A** | B | X | C |
|target_text|  |  | A | B | A | B | **A** | B |  |  |

9. **i = 7 j = 5** target_text[j]와  text[i]가 같기 때문에 i 와 j를 1씩 증가 시킨다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | A | **B** | X | C |
|target_text|  |  | A | B | A | B | A | **B** |  |  |

9. **i = 8 j = 6**  7번 과정과 동일한 이유로 **found target_text at index 2**가 출력 되고 i는 8로 유지되고 j는 4가 된다.
| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | A | B | X | C |
|target_text|  |  | A | B | A | B | A | B | => |  |

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | **A** | **B** | **A** | **B** | X | C |
|target_text|  |  |  |  | **A** | **B** | **A** | **B** | A | B |


10. **i = 8 j = 4** target_text[j]dhk text[i] 다르고 j가 0이 아니므로 j = lsp[j-1] 즉 lsp[3] 즉 2로 바꾼다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | A | B | **X** | C |
|target_text|  |  |  |  | A | B | A | B | **A** | B |

즉 9번의 과정을 통해 text의 인덱스 4,5,6,7의 원소와 target_text의 인덱스 0,1,2,3의 인덱스가 같아 그 이후의 인덱스가 같은지를 판별 하였으나 다르다고 판별 되자 
길이가 2인 AB 패턴을 이용하여 text의 인덱스 6,7의 원소와 target_text의 인덱스 0,1의 인덱스가 같은 것으로 보고 target_text의 인덱스 2와 text의 인덱스 8을 다시 비교해 보는 과정이다.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|text| A | B | A | B | A | B | A | B | **X** | C |  |  |
|target_text|  |  |  |  |  |  | A | B | **A** | B | A | B |

### 이후 계속 실행하면 j는 다시 한번 lps[1] 즉 0이 되고 인덱스 8과 비교해 본 후 이후로는 i만 1씩 늘어나다가 탐색이 종료될 것이다.
### 하지만 예제 1번의 마지막 부분과 예제 2번의 10번 과정 이후 간략하게 생략한 부분 부터는 무의미한 과정임을 알 수 있다.

___

### 코드를 약간 계선하였다.

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

    while i < N and (K-j) <= (N-i):   #개선 (text의 i 이후 남아있는 부분) < (target_text의 j 이후 남아있는 부분) 인 경우에는 더이상 볼 필요가 없다. 
        if j < K and target_text[j] == text[i]:
            i += 1
            j += 1
        
        elif target_text[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            
            else:
                i += 1
        
        if  j == K:
            print("found target_text at index" + str(i - j))
            j = lps[j-1]
```

___

# P.S. 마지막 기존 코드를 약간 변형 한 것을 제외한 나머지 코드는 [일시불 님의 [Python] KMP 알고리즘으로 문자열 찾기] (https://devbull.xyz/python-kmp-algorijeumeuro-munjayeol-cajgi/) 일시불 님의 코드를 분석하고 공부 하였음을 밝힙니다.