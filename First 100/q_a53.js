/*
Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.

Qs:
1. If the input array is empty, what should I do?
- Return null.
2. Is the array sorted?
- No.
3. Can the input array contain duplicates?
- Yes.
4. Can the answer subarray be a length of 0?
- No.
*/
function maxSubArray(nums) {
    if (!nums.length) return null;
    let subArrSum = nums[0], maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        subArrSum = Math.max(subArrSum+nums[i], nums[i]);
        maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
}

/*
Test Cases:
[1,-3,2,0,1] => 3
[] => null
[-2,-3] => 0
[1] => 1

Time Complexity: O(n)
Space Complexity: O(1)

Category: DP
*/