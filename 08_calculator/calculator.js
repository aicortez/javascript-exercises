const add = function(firstNum, secondNum) {
  let result = firstNum + secondNum
  return result
};

const subtract = function(firstNum, secondNum) {
  let result = firstNum - secondNum
  return result
};

const sum = function(listOfNum) {
  let result = 0
	for (let i = 0; i < listOfNum.length; i++) {
    result = listOfNum[i]+result
  }
  return result
};

const multiply = function(numsArray) {
  let result = [numsArray[0]]
  for (let i = 1; i < numsArray.length; i++) {
    result = result * numsArray[i]
  }
  return result
};

const power = function(firstNum, secondNum) {
	let result = firstNum ** secondNum
  return result
};

const factorial = function(num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result = result * i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
