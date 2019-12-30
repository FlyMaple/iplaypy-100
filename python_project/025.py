# 階乘：也是數學裡的一種術語；
# 階乘指從1乘以2乘以3乘以4一直乘到所要求的數；
# 在表達階乘時，就使用“！”來表示。如h階乘，就表示為h!；
# 階乘一般很難計算，因為積都很大。

# Python練習題問題如下：
# 提問：求1+2!+3!+...+20!的和


def calculate(n):
    total = 1
    for i in range(1, n + 1):
        total *= i
    return total


target = 20
total = 0
for i in range(1, target + 1):
    c = calculate(i)
    total += c
    print('%d! = %d, total: %d' % (i, c, total))
print('Target: %d, total: %d' % (target, total))
