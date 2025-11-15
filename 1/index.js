// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++){
        const otherNum = target - nums[i];
        if (myMap.has(otherNum)) {
            return [myMap.get(otherNum),i]
        } else {
            myMap.set(nums[i],i)
        }
    }
}
let arr = [3, 2, 4];
let x = 6;
let result = twoSum(arr, x)
console.log(result)