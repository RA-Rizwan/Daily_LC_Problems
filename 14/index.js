// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

 
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let s = strs.reduce((a, b) => (a.length < b.length ? a : b));
  let l = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    for (let str of strs) {
      if (str[i] !== c) return l;
    }
    l += c;
  }
  return l;
};