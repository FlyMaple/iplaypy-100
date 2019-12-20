# Python練習題問題如下：

# 簡述：一個整數，它加上100和加上268後都是一個完全平方數

# 提問：請問該數是多少？

# Python解題思路分析：在10000以內判斷，將該數加上100後再開方，加上268後再開方，如果開方後的結果滿足如下條件，即是結果。

from math import sqrt

for i in range(10000):
    if sqrt(i + 100) % 1 == 0 and sqrt(i + 268) % 1 == 0:
        print('result: {}'.format(i))
        break