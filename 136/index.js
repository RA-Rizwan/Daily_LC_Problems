// Single Number

// Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

let arr = [1, 2, 1, 2, 4]

//Approach 1
function singleNumber(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) return nums[i]
    }
};
// let result = singleNumber(arr);
//console.log(result)

//Approach 2

function singleNumber2(nums) {

    let xor = 0;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}
let result2 = singleNumber2(arr);
console.log(result2)