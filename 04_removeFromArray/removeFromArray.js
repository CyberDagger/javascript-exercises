const removeFromArray = function(inArray, ...toRemove) {
  for (let i = 0; i < inArray.length ; i++) {
    if (toRemove.includes(inArray[i])) {
      inArray.splice(i, 1);
      i--;
    }
  }
  return inArray;
};

// Do not edit below this line
module.exports = removeFromArray;
