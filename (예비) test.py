import sys
input = sys.stdin.readline
from itertools import chain

def list_sum(lst):
    s = 0
    for i in lst:
        s += sum(i)
    return s

n = int(input())
square = list(list(map(int,input().split())) for _ in range(n))
frst_check = list_sum(square)
if frst_check == n ** 2:
    print(0)
    print(1)
elif frst_check == 0:
    print(1)
    print(0)

else:
    paper = []
    paper.append(square)

    b_cnt = 0
    w_cnt = 0 
    while paper:
        new_paper = []
        n //= 2
        if n == 1:
            print(paper)
            paper = list(chain(*list(chain(*paper))))
            print(paper)
            for i in paper:
                if i:
                    b_cnt += 1
                else:
                    w_cnt += 1
            break
        area = n ** 2

        for square in paper:   
            temp = [[], [], [], []]
            for y in range(n):
                temp[0].append(square[y][:n])
                temp[1].append(square[y][n:])
            for y in range(n,2*n):
                temp[2].append(square[y][:n])
                temp[3].append(square[y][n:])
            
            for new_square in temp:
                color = list_sum(new_square)
                if color == area:
                    b_cnt += 1
                elif color == 0:
                    w_cnt += 1
                else:
                    new_paper.append(new_square)
        paper = new_paper
        
        for i in paper:
            print(i)
        print(w_cnt, b_cnt)

    print(w_cnt)
    print(b_cnt)