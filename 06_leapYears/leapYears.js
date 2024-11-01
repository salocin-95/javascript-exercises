const leapYears = function(year) {

    if ((Number.isInteger(year/400)) === false) {
        return false;
    } else {
        if ((year % 4) === 0) {
            return true;
        } else {
            return false;
        }
    }  
};

// Do not edit below this line
module.exports = leapYears;
