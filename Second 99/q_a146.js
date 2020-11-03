/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Follow-ups:
- How can we prove that at least one duplicate number must exist in nums? 
- Can you solve the problem without modifying the array nums?
- Can you solve the problem using only constant, O(1) extra space?
- Can you solve the problem with runtime complexity less than O(n2)?
*/

function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let abs = Math.abs(nums[i]);
        if (nums[abs] < 0) return abs;
        else nums[abs] *= -1;
    }
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}