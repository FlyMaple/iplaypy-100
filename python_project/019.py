# 什麼是完數？
# 完全數，又被稱作完美數或完備數，是一些特殊的自然數。
# 它所有的真因子（即除了自身以外的約數）的和（即因子函數），恰好等於它本身。如果一個數恰好等於它的因子之和，則稱該數為“完全數”。

# 以上，是我們的大百度為大家提供的關於完數的解釋。接下來，就來開始我們的練習吧。

# Python練習題問題如下：
# 要求：用python方法找出1000以內的所有完數，並輸出。

from functools import reduce

def calculate(val, val_list, start = 1):
    end = int(val)

    for i in range(start, end):
        if val % i == 0:
            val_list.append(i)
            calculate(val, val_list, i + 1)
            break
    return val_list

for i in range(1, 1000 + 1):
    result = calculate(i, [])
    if len(result) > 1:
        # print('%d %s' % (i, reduce(lambda x, y: x + y, result)))
        # print('%d %s' % (i, result))
        if i == reduce(lambda x, y: x + y, result):
            print('%d => %s' % (i, ' + '.join(map(str, result))))
