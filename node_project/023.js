//  這道Python練習題，是要根據已經給出的一個菱形圖案，用python方法完成一樣效果的輸出。
//  具體的菱形圖案效果如下圖所示：
//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *

// Python解題思路分析：
// 需要先把圖形分成兩部分來看待；
// 前四行一個規律；
// 後三行一個規律；
// 利用雙重for循環，第一層控制行，第二層控制列，來試試吧！

function normalizeLength(count, length) {
  var sp = '';
  for (var i = 0; i < length; i++) {
    sp += ' ';
  }
  var star = '';
  for (var i = 0; i < count; i++) {
    sp += '*';
  }
  return sp + star;
}

function draw(count) {
  var up_list = Array(count)
    .fill('')
    .map((e, i) => i * 2 + 1);
  var down_list = [...up_list].reverse();
  var full_list = up_list.concat(down_list.slice(1));
  for (var i of full_list) {
    console.log(normalizeLength(i, Math.floor((count * 2 - i) / 2)));
  }

  //   最基本的上下兩個 for loop 作畫
  //   for (var i = 0; i < count; i++) {
  //     var base = i * 2 + 1;
  //     var sp = Math.floor((count * 2 - base) / 2);
  //     console.log(normalizeLength(base, sp));
  //   }
  //   for (var i = count - 2; i >= 0; i--) {
  //     var base = i * 2 + 1;
  //     var sp = Math.floor((count * 2 - base) / 2);
  //     console.log(normalizeLength(base, sp));
  //   }
}

draw(6);
