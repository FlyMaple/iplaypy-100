# Python練習題問題如下：
# 簡述：這裡有四個數字，分別是：1、2、3、4
# 提問：能組成多少個互不相同且無重複數字的三位數？各是多少？

# Python解題思路分析：可填在百位、十位、個位的數字都是1、2、3、4。組成所有的排列後再去掉不滿足條件的排列。

value = [1, 2, 3, 4]
result = []
for a in value:
    for b in value:
        for c in value:
            if (a != b) and (a != c) and (b != c):
                result.append([a, b, c])

print(result)
print('Count: {}'.format(len(result)))