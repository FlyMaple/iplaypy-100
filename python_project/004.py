# Python練習題問題如下：

# 簡述：要求輸入某年某月某日
# 提問：求判斷輸入日期是當年中的第幾天？

# Python解題思路分析：
# 我們就以3月5日這一天為例。首先把前兩個月的加起來，然後再加上5天即本年的第幾天。這裡有一種特殊的情況，就是閏月，遇到這種情況且輸入月份大於2時需考慮多加一天。如果不是很明白，可以看下邊的python源碼。

import calendar

year = 2015
month = 6
day = 7
days = 0

for i in range(1, month):
    monthDay = 0
    
    if i == 2:
        if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
            monthDay = 29
            days += monthDay
        else:
            monthDay = 28
            days += monthDay
    else:
        monthDay = calendar.monthrange(year, i)[1]
        days += monthDay

    print('{} 月: {}'.format(i, monthDay))

print('{} 月: {}'.format(month, day))
days += day

print('Days: {}'.format(days))