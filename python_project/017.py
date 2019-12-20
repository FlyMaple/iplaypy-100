# Python練習題問題如下：
# 要求：輸入一行字符，分別統計出其中英文字母、空格、數字和其它字符的個數。

# Python解題思路分析：
# 利用while語句,條件為輸入的字符不為'\n'。

text = '123 qwe \n\r\t ?>< 一二三'

def ischinese(char):
    return True if '\u4e00' <= char <= '\u9fa5' else False

chinese = 0
alpha = 0
digit = 0
space = 0
other = 0

for c in text:
    uc = c.encode('utf8')
    if ischinese(c):
        chinese += 1
    elif uc.isalpha():
        alpha += 1
    elif uc.isdigit():
        digit += 1
    elif uc.isspace():
        space += 1
    else:
        other += 1
print('chinese: %d, alpha: %d, digit: %d, space: %d, other: %d' % (chinese, alpha, digit, space, other))