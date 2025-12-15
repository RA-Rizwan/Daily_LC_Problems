// Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 function uniqueOccurrences(arr) {
   const freq = new Map();
   for (const x of arr) {
     freq.set(x, (freq.get(x) || 0) + 1);
   }

   const s = new Set(freq.values());
   return freq.size === s.size;
};
 
// Time complexity:O(n)
// Space complexity:O(n)