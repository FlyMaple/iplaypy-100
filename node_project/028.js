// Python回推與遞推的練習題如下：
// 問題描述：
// 已知有五位朋友在一起。第五位朋友他說自己比第4個人大2歲；
// 問第4個人歲數，他說比第3個人大2歲；
// 問第三個人，又說比第2人大兩歲；
// 問第2個人，說比第一個人大兩歲；
// 最後問第一個人，他說是10歲。

// 要求：求第5個人的年齡是多少。

// python解題思路分析：這裡又是要用到利用遞歸的方法來解決這道題了。遞歸分為回推和遞推兩個階段。要想知道第五個人歲數，需知道第四人的歲數，依次類推，推到第一人是10歲。這樣再往回推。

function age(n) {
  var ret = 0;
  if (n === 1) {
    ret = 10;
  } else {
    ret = age(n - 1) + 2;
  }
  console.log(`第 ${n} 人歲數: ${ret}`);
  return ret;
}

age(5);