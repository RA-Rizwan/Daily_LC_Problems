// Reverse String

// Write a function that reverses a string.The input string is given as an array of characters s.
// You must do this by modifying the input array in -place with O(1) extra memory.

function reverseString(s) {
    let halfLength = Math.floor(s.length/2);
    for (let i = 0; i < halfLength; i++){
        let temp = s[i]
        s[i] = s[s.length-(i+1)];
        s[s.length - (i + 1)] = temp;
        
    }
    return s;
}
let s = ['h', 'e', 'l', 'l', 'o']
let result = reverseString(s)
console.log(result)