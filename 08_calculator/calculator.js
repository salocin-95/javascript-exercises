const add = function() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total;
};

const subtract = function() {
  return total = arguments[0] - arguments[1];
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
