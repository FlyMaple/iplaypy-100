// Python練習題問題如下：
// 問題描述：
// 求這樣的一組數據和，s=a+aa+aaa+aaaa+aa...a的值，其中a是一個數字；
// 例如：2+22+222+2222 +22222(此時共有5個數相加)，這裡具體是由幾個數相加，由鍵盤控制。

// Python解題思路分析：：關鍵是計算出每一項的值。

var n = 5;
var a = 2;
var total = 0;
var l = [];
for (var i = 1; i <= n; i++) {
  var item = 0;
  for (var j = 0; j < i; j++) {
    if (j === 0) {
      item += 2;
    } else {
      item += Math.pow(10, j) * a;
    }
  }
  l.push(item);
}
console.log(l.join(' + '));
console.log(`Total ${l.reduce((x, y) => x + y, 0)}`);
