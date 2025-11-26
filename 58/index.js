// Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

 function lengthOfLastWord(s) {
   s = s.trim();
   let length = 0;
   for (let i = s.length - 1; i >= 0; i--) {
     if (s[i] !== " ") length++;
     else if (length > 0) break;
   }
   return length;
 };