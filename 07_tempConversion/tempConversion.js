const convertToCelsius = function(tempInF) {
  // tInC = (tInF - 32) * (5/9) in 
  return Math.round((tempInF - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  // tInF = tInC * (9/5) + 32 in C
  return Math.round((tempInC * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
