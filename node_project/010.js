// Python練習題要求如下：
// 簡述：話說有一對可愛的兔子，出生後的第三個月開始，每一月都會生一對小兔子。當小兔子長到第三個月後，也會每個月再生一對小小兔子.

// 問題：假設條件，兔子都不死的情況下，問每個月的兔子總數為多少？

// Python解題思路分析：兔子的規律為數列1,1,2,3,5,8,13,21....，好似斐那波契數列的感覺哦~

var rabbit_list = [
  {
    month: 0
  },
  {
    month: 0
  }
];

for (var i = 1; i <= 12; i++) {
  rabbit_list.forEach(rabbit => (rabbit.month += 1));

  var adult_rabbit = rabbit_list.filter(rabbit => rabbit.month >= 3);

  rabbit_list = rabbit_list.concat(
    Array(adult_rabbit.length)
      .fill("")
      .map(() => ({ month: 1 }))
  );

  console.log(
    `第 ${i} 個月, 成兔: ${adult_rabbit.length /
      2} 對, 新生兔: ${adult_rabbit.length / 2} 對, 共 ${rabbit_list.length /
      2} 對`
  );
}
