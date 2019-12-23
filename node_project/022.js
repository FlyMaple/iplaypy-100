// Python乒乓球比賽順序練習題，是關於兩個乒乓球隊進行比賽，具體python問題是這樣的。

// 簡述：已知有兩支乒乓球隊要進行比賽，每隊各出三人；
// 甲隊為a,b,c三人，乙隊為x,y,z三人；
// 已抽籤決定比賽名單。

// 問題：有人向隊員打聽比賽的名單。a說他不和x比，c說他不和x,z比，請編程序找出三隊賽手的名單。

var teamA = ['a', 'b', 'c'];
var teamB = ['x', 'y', 'z'];

function calculate() {
  var new_list = [];
  for (var memberA of teamA) {
    if (teamB.length === 1) {
      console.log(`${memberA} <==> ${teamB[0]}`);
      teamB = [];
      break;
    }
    if (memberA === 'a') {
      new_list = teamB.filter(x => x !== 'x');
    }
    if (memberA === 'c') {
      new_list = teamB.filter(x => x !== 'x' && x !== 'z');
    }
    if (new_list.length === 1) {
      console.log(`${memberA} <==> ${new_list[0]}`);
      teamB = teamB.filter(x => x !== new_list[0]);
    }
  }
}

while (true) {
  if (teamB.length === 0) {
    break;
  }
  calculate();
}
