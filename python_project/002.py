# Python練習題問題如下：

# 簡述：企業發放的獎金根據利潤提成。利潤(I)低於或等於10萬元時，獎金可提10%；利潤高於10萬元，低於20萬元時，低於10萬元的部分按10%提成，高於10萬元的部分，可提成7.5%；20萬到40萬之間時，高於20萬元的部分，可提成5%；40萬到60萬之間時高於40萬元的部分，可提成3% ；60萬到100萬之間時，高於60萬元的部分，可提成1.5%，高於100萬元時，超過100萬元的部分按1%提成.

# 提問：從鍵盤輸入當月利潤I，求應發放獎金總數？

# 玩蛇網Python解題思路分析：請利用數軸來分界及定位。並要注意定義時需要把獎金定義成長整型的數據類型。

I = 1000000

steps = [
    {
        'value': 100000,
        'percent': 0.1
    },
    {
        'value': 200000,
        'percent': 0.075
    },
    {
        'value': 400000,
        'percent': 0.05
    },
    {
        'value': 600000,
        'percent': 0.03
    },
    {
        'value': 1000000,
        'percent': 0.015
    }
]

bonus = 0
print('利潤: {}'.format(I))
for idx, val in enumerate(steps):
    step = val
    stepBonus = 0
    if (I >= step.get('value')):
        if (idx == 0):
            stepBonus = step.get('value') * step.get('percent')
            bonus += stepBonus
            print('{} 萬: {}'.format(step.get('value'), stepBonus))
        else:
            stepBonus = (step.get('value') - steps[idx - 1].get('value')) * step.get('percent')
            bonus += stepBonus
            print('{} 萬: {}'.format(step.get('value'), stepBonus))

    else:
        if (idx == 0):
            stepBonus = step.get('value') * step.get('percent')
            bonus += stepBonus
            print('{} 萬: {}'.format(step.get('value'), stepBonus))
            break
        else:
            stepBonus = (I - steps[idx - 1].get('value')) * step.get('percent')
            bonus += stepBonus
            print('{} 萬: {}'.format(step.get('value'), stepBonus))

    if (I <= step.get('value')):
        break
print('總獎金: {}'.format(bonus))
