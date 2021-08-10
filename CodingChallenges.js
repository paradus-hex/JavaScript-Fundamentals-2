"Use Strict";
/*
//CodingChallenge1
//Functions
const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;
const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function () {
  const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
  const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3)
  if (avgDolphins >= (2 * avgKoalas)) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
  } else if (avgKoalas >= (2 * avgDolphins)) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`
  } else {
    return `No winners.`

  }
}
const winner = checkWinner();
console.log(winner)
console.log(calcAverage(koalasScore1, koalasScore2, koalasScore3))
console.log(calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3))

//CodingChallenge2
//Arrays
const calcTip = function (bill) {
  const tip = 50 < bill && bill < 300 ? (.15 * bill) : (.20 * bill)
  return tip
}
console.log(calcTip(100))
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)

//CodingChallenge3
//Objects
const markInfo = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass) / (this.height ** 2)
    return this.bmi
  }
}
const johnInfo = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass) / (this.height ** 2)
    return this.bmi
  }
}
// console.log(markInfo, johnInfo)
// markBMI = markInfo.calcBMI()
// johnBMI = johnInfo.calcBMI()
// console.log(markInfo, johnInfo)
if (markInfo.calcBMI() > johnInfo.calcBMI()) { //We could have also used markInfo.bmi and johnInfo.bmi instead of calling the method in the if else statements.
  console.log(`Marks's BMI (${markInfo.calcBMI()}) is higher than John's (${johnInfo.calcBMI()}))`)
} else {
  console.log(`John's BMI (${johnInfo.calcBMI()}) is higher than Marks's (${markInfo.calcBMI()}))`)
}
*/
//CodingChallenge4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  const tip = 50 < bill && bill < 300 ? (.15 * bill) : (.20 * bill)
  return tip
}

for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push((tip) + bills[i])
}
console.log(tips, totals)

const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return `Average is ${sum / arr.length}`
}
console.log(calcAverage(totals));
