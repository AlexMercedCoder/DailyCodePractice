def gengen(x):
    for i in x:
        if (i % 2 == 0):
            yield i
        else:
            yield i + 1

onlyEvens = [i+2 for i in gengen([1,2,3,4,5,6])]
print(onlyEvens)
