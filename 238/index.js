// Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// // The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

 function productExceptSelf(nums) {
   const n = nums.length;
   const ans = new Array(n).fill(0);
   let product = 1;
   let zeros = 0;

   for (const num of nums) {
     if (num === 0) {
       zeros++;
       continue;
     }
     product *= num;
   }

   if (zeros === 1) {
     for (let i = 0; i < n; i++) {
       ans[i] = nums[i] === 0 ? product : 0;
     }
   } else if (zeros === 0) {
     for (let i = 0; i < n; i++) {
       ans[i] = Math.floor(product / nums[i]);
     }
   }

   return ans;
 };