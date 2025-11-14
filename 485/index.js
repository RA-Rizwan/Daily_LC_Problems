// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let arr = [1, 1, 0, 1, 1, 1]
var findMaxConsecutiveOnes = function (nums) {
  let maxConsective = 0;
  let count = 0; //1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxConsective = Math.max(maxConsective, count);
      count = 0;
    }
    maxConsective = Math.max(maxConsective, count);
  }
  return maxConsective;
};

let result = findMaxConsecutiveOnes(arr)

console.log(result);
