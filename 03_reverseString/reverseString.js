const reverseString = function(originalString) {
  let reversedString = "";
  for (let i = originalString.length; i > 0; i--) {
    reversedString += originalString.slice(i - 1, i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
