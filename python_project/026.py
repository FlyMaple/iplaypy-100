# Python練習題問題如下：
# 問題：要求用遞歸的方法，求5!階乘

# Python解題思路分析：
# 遞歸公式：fn=fn_1*4!


def calculate(n, s=1, total=1):
    if n != 0:
        total *= s
        print('%d! = %d' % (s, total))
        return calculate(n - 1, s + 1, total)
    return total


calculate(10)
