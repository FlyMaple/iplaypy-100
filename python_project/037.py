# Python解題思路分析：
# 首先可以利用選擇法，即從9個數據進行比較過程中，先選擇一個最小的與第一個元素交換。之後以此類推，即用第二個元素與後8個進行比較，並進行交換。

from random import randint

l = [randint(1, 1000) for i in range(10)]
print('Before %s' % (l))
l.sort()
print('After: %s' % (l))
