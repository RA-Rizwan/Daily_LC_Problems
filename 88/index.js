// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.


function mergeSort(nums1, nums2, m, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (nums1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}


/// Approach 2

function mergeSort2(nums1,nums2,m,n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = (m + n) - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (p1>=0&&nums2[p2]>nums1[p1]) {
            nums1[i] = nums2[p2]
            p2--;
        } else {
            nums1[i] = nums1[p1]
            p1--;
      }
    }
    return nums1
}

let arr1 = [1, 2, 3, 7, 9, 10, 12, 15];
let arr2 = [2, 5, 6, 8, 9];
let x = 8;
let y = 5;

//let result = mergeSort(arr1, arr2, x, y);
//console.log(result);

let result2 = mergeSort2(arr1, arr2, x, y);
console.log(result2);

