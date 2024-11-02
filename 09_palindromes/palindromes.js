const palindromes = function () {
    for(i = 0, j = arguments.length - 1; i < arguments.length; i++, j--) {
        if (arguments[i] != arguments[j]) {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
