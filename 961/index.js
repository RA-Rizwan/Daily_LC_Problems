// N-Repeated Element in Size 2N Array

/** 
 * You are given an integer array nums with the following properties:

* * nums.length == 2 * n.
* * nums contains n + 1 unique elements.
* * Exactly one element of nums is repeated n times.
* * Return the element that is repeated n times. */


var repeatedNTimes = function (nums) {

    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] === nums[i - 1] || nums[i] === nums[i - 2]) {
            return nums[i]
        }
    }

    /** if n =2 and nums stored like that [1,2,3,1]  then upper conditions not work for us the we need to return nums[0] or nums[2n-1] manually*/
    return nums[nums.length-1]
}

console.log(repeatedNTimes([1, 2, 3, 4, 3]))

/**
 * time complexity : o(N)
 * space complexity : o(1)
 */