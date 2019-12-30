# Python練習題問題如下：
# 問題：要求利用遞歸函數調用的方式，將獲取到所輸入的5個字符，以相反順序分別輸出來。


def output(text):
    if len(text) == 0:
        return

    text = text[:5]
    print(text[-1])
    text = text[:-1]
    output(text)


output('Level')
print('--------')
output('SkyeTina')
