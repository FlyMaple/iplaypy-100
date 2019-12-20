# Python練習題問題及要求如下：
# 問題簡述：一隻小猴子吃桃子的問題。
# 話說，一隻小猴子第一天摘下若干個桃子，並吃了一半。感覺到吃的還不癮，於是又多吃了一個；
# 第二天早上，又將剩下的桃子吃掉一半，又多吃了一個。
# 以後每天早上,都吃了前一天剩下的一半零一個。

# 玩蛇網python問題：請問，到了第10天早上想再吃時，卻發現只剩下一個桃子了。求第一天共摘了多少？

# Python解題思路分析：這道題，需要採取逆向思維的方法來從後往前推算，思維清晰，思路活躍。

m = 1
for i in range(10):
    print('第 {:2d} 天有 {:4d} 個桃子'.format(10 - i, m))
    m = (m + 1) * 2
