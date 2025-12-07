// To Lower Case

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

function toLowerCase(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      result += String.fromCharCode(ascii + 32);
    } else {
      result += s.charAt(i);
    }
  }
  return result;
};

// Time complexity: O(n)
// Space complexity: O(1)