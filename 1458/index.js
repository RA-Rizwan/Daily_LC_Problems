/**
 Max Dot Product of Two Subsequences

 Given two arrays nums1 and nums2.
Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length.
A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not).
 */

var maxDotProduct = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let current = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER);
  let previous = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let curr_product = nums1[i - 1] * nums2[j - 1];
      current[j] = Math.max(
        curr_product,
        previous[j],
        current[j - 1],
        curr_product + Math.max(0, previous[j - 1])
      );
    }
    [current, previous] = [previous, current];
  }
  return previous[n];
};

/**
 Time Complexity : O(M∗N)
 Space Complexity : O(N)
 */