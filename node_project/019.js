// 什麼是完數？
// 完全數，又被稱作完美數或完備數，是一些特殊的自然數。
// 它所有的真因子（即除了自身以外的約數）的和（即因子函數），恰好等於它本身。如果一個數恰好等於它的因子之和，則稱該數為“完全數”。

// 以上，是我們的大百度為大家提供的關於完數的解釋。接下來，就來開始我們的練習吧。

// Python練習題問題如下：
// 要求：用python方法找出1000以內的所有完數，並輸出。

function calculate(val, val_list, start) {
  if (val === 1) {
    return [1];
  }

  val_list = val_list || [];
  start = start || 1;
  end = val;
  for (var i = start; i < end; i++) {
    if (val % i === 0) {
      val_list.push(i);
      calculate(val, val_list, i + 1);
      break;
    }
  }
  return val_list;
}

for (var i = 1; i <= 1000; i++) {
  var result = calculate(i);

  if (result.length > 1 && result.reduce((x, y) => x + y, 0) === i) {
    console.log(`${i} => ${result.join(" + ")}`);
  }
}
