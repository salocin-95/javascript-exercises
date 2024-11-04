const fibonacci = function(count) {
    number = parseInt(count)
    if (number === 0) return 0;
    if (number < 0) return 'OOPS';
    let a = 0, b = 1;
    for (i = 1; i < number; i++) {
        const next = a + b;
        a = b;
        b = next
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
