# Python練習題問題如下：

# 簡述：9*9乘法口訣表。
# 要求：逐項單位輸出。例如1的一行，2的一行，以此類推。

# Python解題思路分析：
# 注意分行與列考慮。這里共有9行和9列。x控制行，y控制列

for i in range(1, 10):
    line = ''
    for j in range(1, 10):
        if j != 1:
            line += ', '
        line += '%d*%d=%d' % (i, j, i * j)
    print(line)