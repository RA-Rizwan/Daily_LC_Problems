// Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (right > left) {
        let width = right - left;
        let area = Math.min(height[right], height[left]) * width;
        max = Math.max(max, area)
        height[right] > height[left] ? left++ : right--;
    }
    return max
}
let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(arr)) //49