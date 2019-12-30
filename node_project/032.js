// Python練習題問題及要求：按相反的順序輸出列表中的每一位值。

var l = Array(10)
  .fill()
  .map((i, idx) => idx + 1);
l.reverse();
console.log(l);
