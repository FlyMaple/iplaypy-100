# Python練習題問題如下：
# 要求：獲取輸入的內容，並利用條件運算符的嵌套方式來完成這道題。
# 學習成績>=90分的同學用A表示，60-89分之間的用B表示，60分以下的用C表示。

# Python解題思路分析：(a>b) a:b這是條件運算符的基本例子。


score = int(input('score:'))
if score >= 90:
    print('A')
elif score >= 60 and score <= 89:
    print('B')
else:
    print('C')