def move_zeros(arr):
    count = 0
    array = []

    for i in arr:
        if i is False:
            array.append(False)
        elif i == 0:
            count += 1
        else:
            array.append(i)

    while count > 0:
        array.append(0)
        count -= 1

    return array