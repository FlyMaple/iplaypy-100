// Python練習題問題如下：
// raw_input獲取給定的一個不多於5位的正整數。

// 要求有二：
// 一、求它是幾位數；
// 二、逆序打印出各位數字。

var input = '12345';
var input_reverse = input.split('');
input_reverse.reverse();

console.log(`${input.length} 位數: ${input_reverse.join(' ')}`);
