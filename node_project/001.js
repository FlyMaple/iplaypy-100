// Python練習題問題如下：
// 簡述：這裡有四個數字，分別是：1、2、3、4
// 提問：能組成多少個互不相同且無重複數字的三位數？各是多少？

// Python解題思路分析：可填在百位、十位、個位的數字都是1、2、3、4。組成所有的排列後再去掉不滿足條件的排列。

var value = [1, 2, 3, 4];
var result = [];
for (var a = 0; a < value.length; a++) {
  for (var b = 0; b < value.length; b++) {
    for (var c = 0; c < value.length; c++) {
      var item = [];
      item.includes(value[a]) === false ? item.push(value[a]) : null;
      item.includes(value[b]) === false ? item.push(value[b]) : null;
      item.includes(value[c]) === false ? item.push(value[c]) : null;
      item.length === 3 ? result.push(item) : null;
    }
  }
}
console.log(result);
console.log(`Count: ${result.length}`);
