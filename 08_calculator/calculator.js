const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(args) {
	let result = 0;
  args.forEach(x => result += x);
  return result;
};

const multiply = function(args) {
  let result = 1;
  args.forEach(x => result *= x);
  return result;
};

const power = function(a, x) {
  let result = a;
	for(let i = 1; i < x; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(x) {
	let result = 1;
  while(x >= 1) {
    result *= x;
    x--;
  }
  return result;
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
