// Python練習題問題如下：

// 簡述：要求輸入某年某月某日
// 提問：求判斷輸入日期是當年中的第幾天？

// Python解題思路分析：
// 我們就以3月5日這一天為例。首先把前兩個月的加起來，然後再加上5天即本年的第幾天。這裡有一種特殊的情況，就是閏月，遇到這種情況且輸入月份大於2時需考慮多加一天。如果不是很明白，可以看下邊的python源碼。

var year = 2015;
var month = 6;
var day = 7;

var days = 0;
for (var i = 0; i < month - 1; i++) {
  var monthDay = new Date(year, i + 1, 0).getDate();
  days += monthDay;
  console.log(`${i + 1}月: ${monthDay}`);
}
console.log(`${month}月: ${day}`);
days += day;

console.log(`Days: ${days}`);
