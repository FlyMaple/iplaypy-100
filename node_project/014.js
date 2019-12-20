// Python練習題問題如下：
// 要求：將一個正整數分解質因數；例如您輸入90，分解打印90=2*3*3*5。

// Python解題思路分析：
// 這道題需要分三部分來分解，具體分解說明如下。
// 1、首先當這個質數恰等於n的情況下，則說明分解質因數的過程已經結束，打印出即可。
// 2、如果遇到n<>k，但n能被k整除的情況，則應打印出k的值。同時用n除以k的商，作為新的正整數你n，之後再重複執行第一步的操作。
// 3、如果n不能被k整除時，那麼用k+1作為k的值，再來重複執行第一步的操作系統。
// 數學不靈光的童鞋，真是很難解哦。

function calculate(val, val_list) {
  val_list = val_list || [];

  for (var i = 2; i <= val; i++) {
    if (val % i === 0) {
      val_list.push(i);
      calculate(val / i, val_list);
      break;
    }
  }

  return val_list;
}

for (var i = 100; i <= 110; i++) {
  console.log(`${i} => ${calculate(i).join(' * ')}`);
}
