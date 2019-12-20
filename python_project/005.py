# Python練習題問題如下：

# 整數順序排列問題簡述：任意三個整數類型，x、y、z
# 提問：要求把這三個數，按照由小到大的順序輸出

# Python解題思路分析：www.iplaypy.com
# 首先，要想方法把最小的數放到x位上，之後將x與y進行比較；
# 如果x>y的話，就將x與y的值進行交換；
# 然後再用x與z進行比較，如果x>z則將x與z的值進行交換，這樣能使x最小

from copy import copy

numbers = [1, 2, 3, 6, 5, 4, 0, -9, -8, -7, -4, -5, -6]
numbers_copy = copy(numbers)
numbers_copy.sort()

print(numbers_copy)
