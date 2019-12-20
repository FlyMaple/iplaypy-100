# 什麼是水仙花數？百度一下：水仙花數是指一個n 位正整數( n≥3 )，它的每個位上的數字的n 次冪之和等於它本身。（例如：1^3 + 5^3+ 3^3 = 153）。

# Python水仙花數for循環應用，編程練習題實例十三

# Python練習題問題如下：
# 要求：打印輸出所有的"水仙花數"。

# Python解題思路分析：
# 可以利用for循環控制流語句來完成操作。從100-999個數，每個數分解出個位、十位和百位。

for i in range(100, 1000):
    hDigit = int(str(i)[0])
    tDigit = int(str(i)[1])
    digit = int(str(i)[2])
    for j in range(1, i):
        if hDigit ** j + tDigit ** j + digit ** j == i:
            print(i)
            break
