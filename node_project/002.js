// Python練習題問題如下：

// 簡述：企業發放的獎金根據利潤提成。利潤(I)低於或等於10萬元時，獎金可提10%；利潤高於10萬元，低於20萬元時，低於10萬元的部分按10%提成，高於10萬元的部分，可提成7.5%；20萬到40萬之間時，高於20萬元的部分，可提成5%；40萬到60萬之間時高於40萬元的部分，可提成3% ；60萬到100萬之間時，高於60萬元的部分，可提成1.5%，高於100萬元時，超過100萬元的部分按1%提成.

// 提問：從鍵盤輸入當月利潤I，求應發放獎金總數？

// 玩蛇網Python解題思路分析：請利用數軸來分界及定位。並要注意定義時需要把獎金定義成長整型的數據類型。

var I = 1000000;

var steps = [
  {
    value: 100000,
    percent: 0.1
  },
  {
    value: 200000,
    percent: 0.075
  },
  {
    value: 400000,
    percent: 0.05
  },
  {
    value: 600000,
    percent: 0.03
  },
  {
    value: 1000000,
    percent: 0.015
  }
];

// var bonus = 0;
// console.log(`利潤: ${I}`);
// var matchSteps = [];
// var matchStepsIndex;
// steps.find((step, stepIdx) => {
//   if (step.value >= I) {
//     matchStepsIndex = stepIdx + 1;
//     return true;
//   }
// });
// matchSteps = steps.slice(0, matchStepsIndex);
// console.log(matchSteps);
// for (var i = 0; i < matchSteps.length; i++) {
//   var prevStep = matchSteps[i - 1];
//   var stepBonus = 0;
//   if (matchSteps[i].value <= I) {
//     if (prevStep) {
//       stepBonus =
//         (matchSteps[i].value - prevStep.value) * matchSteps[i].percent;
//       bonus += stepBonus;
//       console.log(`${matchSteps[i].value} 萬: ${stepBonus}`);
//     } else {
//       stepBonus = matchSteps[i].value * matchSteps[i].percent;
//       bonus += stepBonus;
//       console.log(`${matchSteps[i].value} 萬: ${stepBonus}`);
//     }
//   } else {
//     if (prevStep) {
//       stepBonus = (I - prevStep.value) * matchSteps[i].percent;
//       bonus += stepBonus;
//       console.log(`${matchSteps[i].value} 萬: ${stepBonus}`);
//     } else {
//       stepBonus = (matchSteps[i].value - I) * matchSteps[i].percent;
//       bonus += stepBonus;
//       console.log(`${matchSteps[i].value} 萬: ${stepBonus}`);
//     }
//   }
// }
// console.log(`總獎金: ${bonus}`);

var bonus = 0;
console.log(`利潤: ${I}`);
for (var i = 0; i < steps.length; i++) {
  var step = steps[i];
  var stepBonus = 0;
  if (I >= step.value) {
    if (i === 0) {
      stepBonus = step.value * step.percent;
      bonus += stepBonus;
      console.log(`${step.value} 萬: ${stepBonus}`);
    } else {
      stepBonus = (step.value - steps[i - 1].value) * step.percent;
      bonus += stepBonus;
      console.log(`${step.value} 萬: ${stepBonus}`);
    }
  } else {
    if (i === 0) {
      stepBonus = step.value * step.percent;
      bonus += stepBonus;
      console.log(`${step.value} 萬: ${stepBonus}`);
      break;
    } else {
      stepBonus = (I - steps[i - 1].value) * step.percent;
      bonus += stepBonus;
      console.log(`${step.value} 萬: ${stepBonus}`);
    }
  }

  if (I <= step.value) {
    break;
  }
}
console.log(`總獎金: ${bonus}`);
