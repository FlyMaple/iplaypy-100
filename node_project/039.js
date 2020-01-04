// Python練習題問題如下：
// 已知有一個已經排好序的數組。要求是，有一個新數據項，要求按原來的規律將它插入數組中。

// Python解題思路分析：
// 首先，判斷此數是否大於最後一個數；
// 然後再考慮插入中間的數的情況，插入後此元素之後的數，依次向後移動一個位n置。

function insert(n) {
  var a = [1, 4, 6, 9, 13, 16, 19, 28, 40, 100, 0];

  console.log(`original [${a.join(', ')}]`);
  if (n > a[a.length - 2]) {
    a.pop();
    a.push(n);
  } else {
    a.pop();
    a.push(n);
    a.sort((self, other) => self - other);
  }
  console.log(`insert a new number [${a.join(', ')}]`);
}

insert(10);
console.log('========================================');
insert(120);
