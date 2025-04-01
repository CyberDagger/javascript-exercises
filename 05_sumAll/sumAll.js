const sumAll = function(firstNumber, secondNumber) {
  let smallNumber;
  let largeNumber;
  let sum = 0;

  if (!(Number.isInteger(firstNumber) && Number.isInteger(secondNumber))) {
    return "ERROR";
  } else if (firstNumber < 0 || secondNumber < 0) {
    return "ERROR";
  }
    
  if (firstNumber > secondNumber) {
    smallNumber = secondNumber;
    largeNumber = firstNumber;
  } else {
    smallNumber = firstNumber;
    largeNumber = secondNumber;
  }
  
  while (smallNumber <= largeNumber) {
    sum += smallNumber;
    smallNumber++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
