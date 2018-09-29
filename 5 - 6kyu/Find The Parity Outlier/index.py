def find_outlier(integers):
    p = 0
    i = 0
    for a in range(3):
        if integers[a] % 2 == 0:
            p += 1
        else:
            i += 1
    for a in range(len(integers)):
        if (p > 1 and integers[a] % 2 == 1) or (i > 1 and integers[a] % 2 == 0):
            return integers[a]
    return None