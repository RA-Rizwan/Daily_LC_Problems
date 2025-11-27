// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

function plusOne(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  if (carry) digits.unshift(1);
  return digits;
};