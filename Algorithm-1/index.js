//Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already
//defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
//Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

//tests
// convertToF(0) should return a number - passed
// convertToF(-30) should return a value of -22 - passed
// convertToF(-10) should return a value of 14 - passed
// convertToF(0) should return a value of 32 - passed
// convertToF(20) should return a value of 68 - passed
// convertToF(30) should return a value of 86 - passed
