/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

var majorityElement = function(nums) {
    let len = Math.floor(nums.length / 2);
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    for (let [num, freq] of m) {
        if (freq > len) return num;
    }
    return -1;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};