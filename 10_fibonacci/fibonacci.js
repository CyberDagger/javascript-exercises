const fibonacci = function(x) {
    let a = 0;
    let b = 1;
    x = parseInt(x);
    if (x < 0) {
        return "OOPS";
    }
    for (let i = 0; i < x; i++) {
        a += b;
        // a will have the higher value after the addition, so the following operations swap their values to retain the order
        a = a + b;
        b = a - b;
        a = a - b;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
