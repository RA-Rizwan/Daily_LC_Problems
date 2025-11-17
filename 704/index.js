// Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function search(nums,target) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;
        else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1
}
let arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
let x = 6;
let result = search(arr, x)
console.log(result);