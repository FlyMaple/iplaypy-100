// 斐波那契數列（Fibonacci sequence），又稱黃金分割數列、因數學家列昂納多·斐波那契以兔子繁殖為例子而引入，故又稱為“兔子數列”，指的是這樣一個數列：1、1、2、3、5、8、13、21、34、在數學上，斐波納契數列以如下被以遞歸的方法定義。

// F0 = 0
// F1 = 1
// Fn = F[n-1] + F[n-2]

// 要求一：輸出第10個斐波那契數列

// 要求二：問題的要求改為：需要輸出指定個數的斐波那契數列，要怎麼來解決呢？我們往下看。

function fib(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

function fib_list(n) {
  const list = [];
  for (var i = 0; i < n; i++) {
    if (i === 0) {
      list.push(1);
    } else if (list[i - 1]) {
      list.push(list[i - 1] + (list[i - 2] || 0));
    }
  }
  return list;
}

function fib_list_2(n) {
    if (n === 0) { return [] }
    if (n === 1) { return [1]}
    if (n === 2) { return [1, 1]}

    const list = [1, 1];
    for (var i = 2; i < n; i++) {
        list.push(list[i - 1] + (list[i - 2] || 0));
    }
    return list;
  }

console.log(fib(10));
console.log(fib_list(10));
console.log(fib_list_2(10));
