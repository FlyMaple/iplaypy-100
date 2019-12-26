// Python練習題問題如下：
// 問題簡述：有一分數序列：2/1，3/2，5/3，8/5，13/8，21/13
// 要求：求出這個數列的前20項之和。

// Python解題思路分析：這道題要關注分子與分母的變化規律。2，3，5，8......

var l = [
  {
    c: 2,
    m: 1
  },
  {
    c: 3,
    m: 2
  }
];

var total = 2 / 1 + 3 / 2;

for (var i = 0; i < 18; i++) {
  var c = l[i].c + l[i + 1].c;
  var m = l[i].m + l[i + 1].m;

  l.push({
    c,
    m
  });

  total += c / m;
}

console.log(total);
