# Python練習題問題如下：
# raw_input獲取給定的一個不多於5位的正整數。

# 要求有二：
# 一、求它是幾位數；
# 二、逆序打印出各位數字。

input = '12345'
input_reverse = list(input)
input_reverse.reverse()

print('%d 位數: %s' % (len(input), ' '.join(input_reverse)))
