# Python練習題問題如下：
# 要求：隨便寫一段代碼，測試time.sleep（）方法效果學習。

import time

dict = {
    'name': 'skye',
    'age': 18,
    'skillA': 'AAA',
    'skillB': 'BBB',
    'skillC': 'CCC',
}

for key, val in dict.items():
    print(key, val)
    time.sleep(1)