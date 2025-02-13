const palindromes = function (string) {
    let stripped = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = stripped.split('').reverse().join('');

    return stripped === reversed;
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
