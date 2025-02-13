const removeFromArray = function(arr, ...rest) {
    return arr.filter((elem) => !rest.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
