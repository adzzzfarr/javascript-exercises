const fibonacci = function(index) {
    if (Number(index) < 0) return 'OOPS';
    
    if (Number(index) === 0) {
        return 0;
    } else if (Number(index) === 1 || Number(index) === 2) {
        return 1;
    }

    return fibonacci(index-1) + fibonacci(index-2);
};

// Do not edit below this line
module.exports = fibonacci;
