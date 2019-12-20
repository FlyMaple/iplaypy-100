# Python練習題要求如下：
# 簡述：話說有一對可愛的兔子，出生後的第三個月開始，每一月都會生一對小兔子。當小兔子長到第三個月後，也會每個月再生一對小小兔子.

# 問題：假設條件，兔子都不死的情況下，問每個月的兔子總數為多少？

# Python解題思路分析：兔子的規律為數列1,1,2,3,5,8,13,21....，好似斐那波契數列的感覺哦~

rabbit_list = [{
    'month': 0
}, {
    'month': 0
}]

for i in range(1, 13):
    for rabbit in rabbit_list:
        rabbit['month'] += 1

    adult_rabbit = list(filter(lambda rabbit: rabbit['month'] >= 3, rabbit_list))

    # rabbit_list = rabbit_list + [{ 'month': 1 }] * len(adult_rabbit)

    # for j in range(len(adult_rabbit)):
    #     rabbit_list.append({ 'month': 1 })

    rabbit_list = rabbit_list + [{ 'month': 1 } for new in range(len(adult_rabbit))]
    
    print('%d 個月, 成兔: %d 對, 新生兔: %d 對, 共 %d 對' % (i, len(adult_rabbit) / 2, len(adult_rabbit) / 2, len(rabbit_list) / 2))