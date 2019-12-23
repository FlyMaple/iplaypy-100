# 這道Python練習題，是要根據已經給出的一個菱形圖案，用python方法完成一樣效果的輸出。

# 具體的菱形圖案效果如下圖所示：
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *

# Python解題思路分析：
# 需要先把圖形分成兩部分來看待；
# 前四行一個規律；
# 後三行一個規律；
# 利用雙重for循環，第一層控制行，第二層控制列，來試試吧！


# def normalizeLength(val, length, decimal = None):
#     if isinstance(val, str):
#         if len(val) >= length:
#             return val
#         result = ' ' * (length - len(val))
#         return normalizeLength(result, length, decimal) if decimal else result + val
#     elif isinstance(val, int):
#         if decimal is None:
#             return ('{' + ':{}'.format(length) + '}').format(val)
#         else:
#             return ('{' + ':{}.{}'.format(length, decimal) + '}').format(val)

def normalizeLength(val, length):
    return ' ' * length + val


def draw(count):
    up_list = [2 * i + 1 for i in range(count)]
    down_list = up_list[:]
    down_list.reverse()
    full_list = up_list + down_list[1:]

    for i in full_list:
        print(normalizeLength('*' * i, ((count * 2 - 1) - i) // 2))


draw(6)
