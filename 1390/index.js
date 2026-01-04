/**
 * Four Divisors
 *
 * Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.
 */

var sumFourDivisors = function (nums) {
    let result = 0;
    
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let sum = 0;
    if (count > 4) continue;

    for (let j = 0; j <= Math.sqrt(nums[i]); j++) {
      if (nums[i] % j == 0) {
        let otherFact = nums[i] / j;
        sum = sum + j;
        if (otherFact != j) {
          count = count + 2;
          sum = sum + otherFact;
        } else {
          count++;
        }
      }
    }
    if (count === 4) {
      result = result + sum;
    }
  }

  return result;
};
//console.log(sumFourDivisors([21,4,21]))

/**
 * time complexity : o(n√m)
 * space complexity : o(1)
 */
