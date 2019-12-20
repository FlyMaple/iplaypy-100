# Python練習題問題如下：
# 問題描述：
# 求這樣的一組數據和，s=a+aa+aaa+aaaa+aa...a的值，其中a是一個數字；
# 例如：2+22+222+2222 +22222(此時共有5個數相加)，這裡具體是由幾個數相加，由鍵盤控制。

# Python解題思路分析：：關鍵是計算出每一項的值。
from functools import reduce

n = 5
a = 2
total = 0
l = [str(a) * i for i in range(1, n + 1)]

print(' + '.join(l))
for val in l:
    total += int(val)
print('Total %d' % total)
print('Total %d' % reduce(lambda x, y: int(x) + int(y), l))