const repeatString = function(string, num) {
    if (num < 0) {
        num = num * (-1)
    }
    return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
