const reverseString = function(string) {
    let array = [];
    for (i = string.length - 1; i >= 0; i--) {
        array.push(string[i]);
    }
    return array.join('');
};

// Do not edit below this line
module.exports = reverseString;
