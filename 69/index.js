// Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

 function mySqrt(x) {
   if (x < 2) return x;
   let left = 1;
   let right = Math.floor(x / 2);

   while (left <= right) {
     const mid = Math.floor((left + right) / 2);
     const square = mid * mid;
     if (square === x) {
       return mid;
     } else if (square < x) {
       left = mid + 1;
     } else {
       right = mid - 1;
     }
   }
   return right;
 };