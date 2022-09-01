function isNumber(number) {
  return typeof number === "number" && !isNaN(number);
}

function add(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2))
    throw new TypeError("Input values must be numbers.");

  return num1 + num2;
}

function subtract(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2))
    throw new TypeError("Input values must be numbers.");

  return num1 - num2;
}

function multiply(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2))
    throw new TypeError("Input values must be numbers.");

  return num1 * num2;
}

function division(numerator, denominator) {
  if (!isNumber(numerator) || !isNumber(num2))
    throw new TypeError("Input values must be numbers.");
  else if (denominator === 0) throw new Error("Denominator should not be zero");

  return numerator / denominator;
}

module.exports = {
  add,
  subtract,
  multiply,
  division,
};
