const repeatString = function (string, times) {
  let final = "";
  if (times < 0) {
    return "ERROR";
  }
  for (i = 0; i < times; i++) {
    final += string;
  }
  return final;
};

// Do not edit below this line
module.exports = repeatString;
