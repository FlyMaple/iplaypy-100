# Python素數計算及輸出練習題要求如下：

# 簡述：區間範圍101-200

# 要求：判斷這個區間內有多少個素數，並逐一輸出。

# Python解題思路分析：
# 首先，判斷這個數是否是素數，方法：用一個數分別去除2到sqrt(這個數)；
# 其結果，能被整除，則表明此數不是素數，反之是素數。

for i in range(101, 201):
    match = True
    for j in range(2, i):
        if i % j == 0:
            match = False
            break
    if match:
        print(i)
            