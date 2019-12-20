// Python練習題問題如下：

// 簡述：9*9乘法口訣表。
// 要求：逐項單位輸出。例如1的一行，2的一行，以此類推。

// Python解題思路分析：
// 注意分行與列考慮。這里共有9行和9列。x控制行，y控制列

for (var i = 1; i <= 9; i++) {
  var line = "";

  for (var j = 1; j <= 9; j++) {
    if (j > 1) {
      line += ", ";
    }
    line += `${i}*${j}=${i * j}`;
  }
  console.log(line);
}
