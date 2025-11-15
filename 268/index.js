// Missing Number

// Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.

let arr = [0, 1, 2, 4, 5, 6, 7];

function missingNumber(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let partialSum = 0;
    for (let i = 0; i < nums.length; i++) {
      partialSum+=nums[i] 
    }
    return totalSum - partialSum;
}
let result = missingNumber(arr)
console.log(result)