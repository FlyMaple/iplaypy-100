// 本文關於Python回文數判斷編程練習。說到回文數，大家可能會比較的陌生，但是在我們的日常生活中常會遇到這樣的數字，只是你不知道它是回文數罷了。例如：12321，這組數字就是回文數。設n是一任意自然數。若將n的各位數字反向排列所得自然數n1與n相等，則稱n為一回文數，這是大百度為我們的解釋。如果想更深入的了解，可以自行查找資料加深學習哦。下面開始我們的編程吧。

// Python練習題問題如下：
// 問題描述：一個5位數，判斷它是不是回文數。

function isReverseMatch(n) {
  var n2 = String(n).split('');
  n2.reverse();
  n2 = +n2.join('');
  return n === n2;
}

var line = 0,
  lines = [];
for (var i = 10000; i <= 20000; i++) {
  if (isReverseMatch(i)) {
    line += 1;
    lines.push(i);
  }
  if (line === 10) {
    console.log(lines.join(' | '));
    line = 0;
    lines = [];
  }
}
