// Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigits(num) {
  return 1 + ((num - 1) % 9);
};