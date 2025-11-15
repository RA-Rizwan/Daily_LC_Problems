// Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return xCopy === rev;
}
let result = isPalindrome(2);
console.log(result);
