const sumAll = function(a, b) {
    if ((a % 1 === 0) === false || (b % 1 === 0) === false) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) return 'ERROR';
    
    let val1 = 0;
    let val2 = 0;

    if (a > b) {
        val1 = b;
        val2 = a;
    } else {
        val1 = a;
        val2 = b;
    }

    let sum = val1;

    while  (val1 < val2) {
        val1++
        sum += val1
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
