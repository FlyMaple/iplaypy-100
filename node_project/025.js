// 階乘：也是數學裡的一種術語；
// 階乘指從1乘以2乘以3乘以4一直乘到所要求的數；
// 在表達階乘時，就使用“！”來表示。如h階乘，就表示為h!；
// 階乘一般很難計算，因為積都很大。

// Python練習題問題如下：
// 提問：求1+2!+3!+...+20!的和

function calculate(n) {
  var total = 1;
  for (var i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

var target = 20;
var total = 0;
for (var i = 1; i <= target; i++) {
  var c = calculate(i);
  total += c;
  console.log(`${i}! = ${c}, total: ${total}`);
}

console.log(`Target: ${target}, total: ${total}`);
