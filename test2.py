def solution(n, k, cmds):
    ans = ['O' for _ in range(n)]
    now = k
    deleted = []
    
    for cmd in cmds:
        if cmd == 'C':
            ans[now] = 'X'
            deleted.append(now)
            assigned = False
            idx = now + 1
            while idx <= n-1:
                if ans[idx] == 'O':
                    now = idx
                    assigned = True
                    break
                idx += 1
            if not assigned:
                idx = now - 1
                while idx >= 0:
                    if ans[idx] == 'O':
                        now = idx
                        break
                    idx -= 1
        
        elif cmd == 'Z':
            restore_idx = deleted.pop()
            ans[restore_idx] = 'O'
        
        elif cmd[0] == 'U':
            x = int(cmd[1:])
            while x >= 0:
                now -= 1
                if ans[now] == 'O':
                    x -= 1
                if x == 0:
                    break
            
        elif cmd[0] == 'D':
            x = int(cmd[1:])
            while x >= 0:
                now += 1
                if ans[now] == 'O':
                    x -= 1
                if x == 0:
                    break
                    
    return "".join(ans)

print(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))