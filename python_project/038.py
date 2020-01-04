# Python練習題問題如下：
# 求一個3*3矩陣對角線元素之和

# Python解題思路分析：
# 解此題要利用雙重for循環控制輸入二維數組；
# 再將a[i][i]累加後輸出。

# [0][0] + [1][1] + [2][2] 之和

from random import randint

a = []
sum = 0

for i in range(3):
    a.append([])
    for j in range(3):
        a[i].append(randint(1, 200))

for i in range(3):
    e = a[i][i]
    print('a[%d][%d] = %d' % (i, i, e))
    sum += a[i][i]

print(a)
print(sum)
