/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/

var singleNumber = function(nums) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    for (let [num, freq] of m) {
        if (freq == 1) return num;
    }
    return -1;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

var singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur);
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    // a XOR a = 0
    // 0 XOR b = b
    // So, if we take of XOR of every number in the input array, we will be left with the single number.
};