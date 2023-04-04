'''
여행경로
문제 설명
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
모든 공항은 알파벳 대문자 3글자로 이루어집니다.
주어진 공항 수는 3개 이상 10,000개 이하입니다.
tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
주어진 항공권은 모두 사용해야 합니다.
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
입출력 예
tickets	return
[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
입출력 예 설명
예제 #1

["ICN", "JFK", "HND", "IAD"] 순으로 방문할 수 있습니다.

예제 #2

["ICN", "SFO", "ATL", "ICN", "ATL", "SFO"] 순으로 방문할 수도 있지만 ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] 가 알파벳 순으로 앞섭니다.

문제가 잘 안풀린다면😢
힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭
'''

def solution(tickets):
    global departure
    global ans_history
    answer = []
    departure = {}
    for dep, arr in tickets:
        if dep in departure:
            departure[dep].append(arr)
            departure[dep].sort()
        else:
            departure[dep] = [arr]
    
    ans_history = ''
    now_loc = 'ICN'
    answer.append(now_loc)
    
    
    dfs('ICN', now_loc)
    answer = ans_history.split()
    return answer

def dfs(history, now_loc):
    global ans_history

    #ans_history 가 빈 문자열이 아닌 경우 (dfs 과정중 모든 티켓을 소모하는 첫 경로를 찾은 경우)
    #departure 생성시 애초에 value 의 list 를 사전 순으로 배열해 놓았기 때문에 더이상 탐색할 필요 없이 dfs 를 종료
    if ans_history:
        if ans_history < history:
            return
            
    if now_loc in departure:
        for i in range(len(departure[now_loc])):
            next_loc = departure[now_loc].pop(i)

            # 다음 목적지를 빼고 난 후 now_loc 이 출발지인 티켓이 더이상 없는 경우 해당 key 제거 후 dfs 호출 
            # (재귀가 끝나고 돌아오는 과정에서 복구시켜야 할 departure 데이터가 달라진다.)
            if not departure[now_loc]:
                del departure[now_loc]
                dfs(history + ' ' + next_loc, next_loc)
                # 재귀가 끝난후 departure dictionary 에서 사용하였던 ticket 을 복구시킨다.
                departure[now_loc] = [next_loc]

            # 그렇지 않은 경우 그냥 dfs 호출 (재귀가 끝나고 돌아오는 과정에서 복구시켜야 할 departure 데이터가 달라진다.)
            else:
                dfs(history + ' ' + next_loc, next_loc)
                # 재귀가 끝난후 departure dictionary 에서 사용하였던 ticket 을 복구시킨다.
                departure[now_loc].append(next_loc)
                departure[now_loc].sort()
    # 더이상 갈 수 있는 경로가 없는 경우
    # 티켓이 남아있으면 단순히 재귀를 끝내고
    elif departure:
        return
    # 티켓 소모가 끝난 경우 ans_history 에 현재까지의 경로(history)를 할당한 후 재귀를 끝낸다.
    else:
        ans_history = history
        return

            
            

        