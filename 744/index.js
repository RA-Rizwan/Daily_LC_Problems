// Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

function nextGreatestLetter(letters, target) {
  let lo = 0,
    hi = letters.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (letters[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return letters[lo % letters.length];
};