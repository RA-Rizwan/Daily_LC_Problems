// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non - decreasing order, remove the duplicates in -place such that each unique element appears only once.The relative order of the elements should be kept the same.

function removeDuplicates(nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(arr);
console.log(result);
