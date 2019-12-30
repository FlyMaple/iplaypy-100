// 獲取輸入內容，能過獲取信息中星期幾的第一個字母來判斷一下是星期幾。如果第一個字母一樣，則繼續判斷第二個字母。

// Python解題思路分析：
// 用情況語句比較好，如果第一個字母一樣，則判斷用情況語句或if語句判斷第二個字母。

function identity(text) {
  var c = text[0];
  var c2 = text[1];

  if (c === 'F') {
    console.log('星期五');
  } else if (c === 'M') {
    console.log('星期一');
  } else if (c === 'W') {
    console.log('星期三');
  } else if (c === 'T') {
    if (c2 === 'u') {
      console.log('星期二');
    } else if (c2 === 'h') {
      console.log('星期四');
    }
  } else if (c === 'S') {
    if (c2 === 'a') {
      console.log('星期六');
    } else if (c2 === 'u') {
      console.log('星期日');
    }
  }
}

var l = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

for (var text of l) {
  identity(text);
}
