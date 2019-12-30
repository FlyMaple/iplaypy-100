# 獲取輸入內容，能過獲取信息中星期幾的第一個字母來判斷一下是星期幾。如果第一個字母一樣，則繼續判斷第二個字母。

# Python解題思路分析：
# 用情況語句比較好，如果第一個字母一樣，則判斷用情況語句或if語句判斷第二個字母。


def identity(text):
    c = text[0]
    c2 = text[1]
    if c == 'F':
        print('星期五')
    elif c == 'M':
        print('星期一')
    elif c == 'W':
        print('星期三')
    elif c == 'T':
        if c2 == 'u':
            print('星期二')
        elif c2 == 'h':
            print('星期四')
    elif c == 'S':
        if c2 == 'a':
            print('星期六')
        elif c2 == 'u':
            print('星期日')


l = ['Monday', 'Tuesday', 'Wednesday',
     'Thursday', 'Friday', 'Saturday', 'Sunday']

for i in l:
    identity(i)
