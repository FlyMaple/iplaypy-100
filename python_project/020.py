# Python練習題問題如下：

# 問題簡述：假設一支皮球從100米高度自由落下。條件，每次落地後反跳回原高度的一半後，再落下。

# 要求：算出這支皮球，在它在第10次落地時，共經過多少米？第10次反彈多高？

# Python解題思路分析：這次要用到range()方法

m = 100
new_m = m
total = 0
for i in range(10):
    total += new_m + new_m / 2
    new_m = new_m / 2
    print('第 {:2d} 次落下, 經過 {:6.2f}m, 回彈 {:5.2f}m'.format(i + 1, new_m * 2, new_m))

    if (i == 9):
        total -= new_m

print('共經過 %fm' % total)
print('第 10 次 反彈 %fm' % new_m)