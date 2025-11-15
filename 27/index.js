// Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in -place.The order of the elements may be changed.Then return the number of elements in nums which are not equal to val.

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
let array = [0, 1, 2, 2, 3, 0, 4, 2];
let y = 2;
let result = removeElement(array, y);
console.log(result);
