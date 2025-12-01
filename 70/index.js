// Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 function climbStairs(n) {
   if (n <= 3) return n;

   let prev1 = 3;
   let prev2 = 2;
   let cur = 0;

   for (let i = 3; i < n; i++) {
     cur = prev1 + prev2;
     prev2 = prev1;
     prev1 = cur;
   }

   return cur;
};
 
// Time Complexity: O(n).
// Space Complexity: O(1).