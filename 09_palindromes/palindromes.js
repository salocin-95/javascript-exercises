const palindromes = function () {
    let str = arguments[0].replace(/[^a-zA-Z0-9]/g, "").toLowerCase() // Regex removes all non-alphanumeric characters.
    for(left = 0, right = str.length - 1; left < (str.length)/2 ; left++, right--) {
        if (str[left] !== str[right]) {
            return false;
        }
    }
    return true

    /*    
    for(i = 0, j = arguments.length - 1; i < arguments.length; i++, j--) {
        if (arguments[0][i] !== arguments[0][j]) {
            return false;
        }
        return true; // Este return iba afuera del loop
    }*/
};

// Do not edit below this line
module.exports = palindromes;
