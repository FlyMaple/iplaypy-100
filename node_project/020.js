// Python練習題問題如下：

// 問題簡述：假設一支皮球從100米高度自由落下。條件，每次落地後反跳回原高度的一半後，再落下。

// 要求：算出這支皮球，在它在第10次落地時，共經過多少米？第10次反彈多高？

// Python解題思路分析：這次要用到range()方法

var _ = require("lodash");

function normalizeNumber(number, length, decimal) {
  var base = Math.pow(10, decimal);

  if (base === 1) {
    return _.padStart(number, length, " ");
  }
  return _.padStart((Math.floor(number * base) / base).toFixed(2), length, " ");
}

var m = 100;
var new_m = m;
var total = 0;
for (var i = 0; i < 10; i++) {
  new_m = new_m / 2;
  total += new_m * 2 + new_m;

  if (i === 9) {
    total -= new_m;
  }

  console.log(
    `第 ${normalizeNumber(i + 1, 2, 0)} 次落下, 經過 ${normalizeNumber(
      new_m * 2,
      6,
      2
    )}m, 回彈 ${normalizeNumber(new_m, 6, 2)}m`
  );
}
console.log(`共經過 ${total}m`);
console.log(`第 10 次 反彈 ${new_m}m`);
