// Python練習題問題如下：
// 求一個3*3矩陣對角線元素之和

// Python解題思路分析：
// 解此題要利用雙重for循環控制輸入二維數組；
// 再將a[i][i]累加後輸出。

// [0][0] + [1][1] + [2][2] 之和

function random() {
  return Math.floor(Math.random() * 200 + 1);
}

var a = [];
var sum = 0;
for (var i = 0; i < 3; i++) {
  a[i] = [];
  for (var j = 0; j < 3; j++) {
    a[i][j] = random();
  }
}

for (var i = 0; i < 3; i++) {
  var e = a[i][i];
  console.log(`a[${i}][${i}] = ${e}`);
  sum += e;
}
console.log(a);
console.log(sum);
