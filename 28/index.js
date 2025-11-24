// Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;

  if (nLen === 0) {
    return 0;
  }

  let i = 0;
  while (i < hLen) {
    let nIndex = 0;
    let j = i;

    while (j < hLen && nIndex < nLen && haystack[j] === needle[nIndex]) {
      j++;
      nIndex++;
    }

    if (nIndex === nLen) {
      return i;
    }

    i++;
  }

  return -1;
};