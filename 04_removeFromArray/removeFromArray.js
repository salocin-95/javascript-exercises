const removeFromArray = function(array, ...input) {
    return array.filter(element => !input.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
