/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 

and it should return false if every element is distinct.
*/

function hasDuplicates(nums) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) return false;
        else m.set(nums[i], 1);
    }
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

var containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};