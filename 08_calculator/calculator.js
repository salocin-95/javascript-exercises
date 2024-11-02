const add = function() {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total;
};

const subtract = function() {
  return total = arguments[0] - arguments[1];
};

const sum = function(array) {
	let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};

const multiply = function(array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function() {
	return total = arguments[0] ** arguments[1];
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1
  }
	for(i = num - 1; i >= 1; i--) {
    num *= i
  }
  return num
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
