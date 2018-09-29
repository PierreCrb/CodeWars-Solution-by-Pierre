def find_nb(m):
    n = 1
    while 1:
        m -= n ** 3
        if (m == 0):
            return n
        if (m < 0):
            return -1
        n += 1