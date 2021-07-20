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


LPS(target_text, lps)

print(lps)