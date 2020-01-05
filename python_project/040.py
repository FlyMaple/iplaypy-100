# Python練習題問題如下：
# 已知數組python列表 a = [99,66,25,10,3]，並且是已經排序過的。現在要求，將a數組的元素逆向排序。

# Python解題思路分析：
# 這是達到效果，將第一個與最後一個交換也是可以完成目標要求的。

a = [99, 66, 25, 10, 3]

print('original: {}'.format(a))
print('reverse: {}'.format(a[::-1]))
a.reverse()
print('reverse: {}'.format(a))
