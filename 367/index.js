// Valid Perfect Square

// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

 function isPerfectSquare(num) {
  if (num < 2) return true;

  let left = 2,
    right = Math.floor(num / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;

    if (squared === num) return true;
    else if (squared < num) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};