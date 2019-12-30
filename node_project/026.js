// Python練習題問題如下：
// 問題：要求用遞歸的方法，求5!階乘

// Python解題思路分析：
// 遞歸公式：fn=fn_1*4!

function calculate(n, s, total) {
  s = s || 1;
  total = total || 1;

  if (n !== 0) {
    total *= s;
    console.log(`${s}! = ${total}`);
    return calculate(n - 1, s + 1, total);
  }
  return total;
}

calculate(10);
