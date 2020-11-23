/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    let m = new Map();
    // (key, value) in m represents (num, index)
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (m.has(complement)) {
            return [i, m.get(complement)];
        } else {
            m.set(nums[i], i);
        }
    }
    return [-1, -1];
    // Time Complexity: O(N), we scan through the array
    // Space Complexity: O(N), Hash Table can store N elements at most
};

/*
1. We will create a map to store numbers and its indices.
2. Scan through every number and compute its complement (number + complement = target) and check if map stores such complement.
If it does, return the current number's index and the complement's index as an array. Else, continue scanning through the array.
*/