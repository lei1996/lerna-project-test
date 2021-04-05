// const bigDecimal = require("js-big-decimal");

// 斜率变化
// 1分钟 > 5分钟 > 10分钟
// 小趋势跟随大趋势
// 1分钟 < 5分钟 < 10分钟

// 斜率数据
// -1387 0 1
// -492.5 0 2
// -26.333333333333332 0 3
// -7.25 0 4
// 402 1 2
// 654 1 3
// 452.6666666666667 1 4
// 906 2 3
// 478 2 4
// 50 3 4

// const slope = (score) => {
//   const arr = [55600, 54213, 54615, 55521, 55571];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       //   console.log(arr[i], arr[j]);
//       const slop = (arr[j] - arr[i]) / (j - i);
//       const slop1 = (arr[j] - arr[i]) / arr[i];
//       console.log(slop, i, j);
//       //   console.log(slop1, i, j);
//     }
//   }
// };

// slope([]);

// 浮点数保留 x 位小数
// console.log(bigDecimal.round("12345.6789", 2)); // 12345.68
// // 浮点数相加/相减/相乘/相除
// console.log(bigDecimal.add("71.680", "71.520")); // 143.200
// console.log(bigDecimal.subtract("71.680", "71.520")); // 0.160
// console.log(bigDecimal.multiply("71.680", "71.520")); // 5126.5536
// console.log(bigDecimal.divide("45", "4", 2)); // 11.25

// 斜率写成 utils
function slope({
  section = [71.52, 71.68], // 区间 前某分钟的值 -> 目标分钟的值
  x = 60, // 时间差值
}) {
  const [left, right] = section;
  const diff = right - left;

  return;
}


const grade = [1.5, 2.0, 3.0, 5.0, 10.0];
function calorimeter() {
  const arrs = [111, 103, 75, 67, 222, 110, 106, 143, 117, 224, 226, 159];
  let cnt = 0;

  for (let i = 0; i < arrs.length; i++) {
    cnt += arrs[i];
  }

  let avg = cnt / arrs.length;

  // 偏差值  当前值 - 平均值
  for (let i = 0; i < arrs.length; i++) {
    console.log(arrs[i] - avg, 'diff');
  }

  console.log(cnt / arrs.length);
}

calorimeter();














function MaxMinLimit({
  initalValue = 0,
  minNum = -5,
  maxNum = 5,
  disable = false,
}) {
  this.datas = {
    count: initalValue,
    minNum,
    maxNum,
    disable,
  };
}

// 增加一个点数
MaxMinLimit.prototype.increment = function () {
  const { count, maxNum, disable } = this.datas;

  if (disable) return;

  if (count < maxNum) {
    this.datas.count = count + 1;
  }
};

// 减少一个点数
MaxMinLimit.prototype.decrement = function () {
  const { count, minNum, disable } = this.datas;

  if (disable) return;

  if (count > minNum) {
    this.datas.count = count - 1;
  }
};

// 临时 锁定/解锁
MaxMinLimit.prototype.setDisable = function ({ bool = false }) {
  this.datas.disable = bool;
};

// 检查是否锁定
MaxMinLimit.prototype.isDisable = function () {
  return this.datas.disable;
};
