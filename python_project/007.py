# Python練習題問題如下：
# 提問：將一個列表的數據複製到另一個列表中。

# 請仔細看要求，這裡要求的是複制數據到一個新的列表中。

# Python列表數據複製，Python解題思路分析：可以了解下[ ：]的含義

# python解題源代碼如下：

from copy import copy

_list = [1, 2, 3]
_list_copy = _list[:]
_list_copy_2 = copy(_list)

print('list: {}'.format(_list))
print('list_copy: {}'.format(_list_copy))
print('list_copy_2: {}'.format(_list_copy_2))