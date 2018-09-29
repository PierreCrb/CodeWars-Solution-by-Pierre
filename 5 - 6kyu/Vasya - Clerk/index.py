def tickets(people):
    f = 0
    t = 0
    for a in people:
        if a == 25:
            t += 1
        elif a == 50:
            if t == 0:
                return "NO"
            f += 1
            t -= 1
        elif a == 100:
            if f >= 1 and t >= 1:
                f -= 1
                t -= 1
            elif t >= 3:
                t -= 3
            else:
                return "NO"
    return "YES"