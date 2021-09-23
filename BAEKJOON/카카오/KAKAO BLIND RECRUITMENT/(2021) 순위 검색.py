'''import re

def solution(info, query):
    answer = []
    candi_data = []
    
    for data in info:
        candi_data.append(tuple(data.split()))
    
    for case in query:
        print(case)
        case = re.sub('and', '', case)
        case = tuple(case.split())
        cnt = 0
        print(case)
        for now in candi_data:
            suitable = True
            for i in range(len(case)):
                if case[i] == '-':
                    continue
                elif i < 4 and now[i] == case[i]:
                    continue
                elif i == 4 and int(now[i]) >= int(case[i]):
                    continue
                print(i, case, now)
                suitable = False
                break
            if suitable:
                cnt += 1
        answer.append(cnt)
                
    return answer'''

'''def solution(info, query):
    data = dict()
    for a in ['cpp', 'java', 'python', '-']:
        for b in ['backend', 'frontend', '-']:
            for c in ['junior', 'senior', '-']:
                for d in ['chicken', 'pizza', '-']:
                    data.setdefault((a, b, c, d), list())
    for i in info:
        i = i.split()
        for a in [i[0], '-']:
            for b in [i[1], '-']:
                for c in [i[2], '-']:
                    for d in [i[3], '-']:
                        data[(a, b, c, d)].append(int(i[4]))
    print(data)
    for k in data:
        data[k].sort()

        print(k, data[k])
    return
print(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))'''