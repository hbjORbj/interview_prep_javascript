/*
Given a non-empty array of integers nums, every element appears twice except for one. 

Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/
var singleNumber = function(nums) {
    let m = new Map();
    for (let num of nums) m.set(num, m.get(num)+1 || 1);
    for (let [num, occurr] of m) {
        if (occurr == 1) return num;
    }
    return -1;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

var singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur);
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
// A XOR A is always equal to zero.
// ex) 5 XOR 5 => 101 XOR 101 => 000
// ex) 6 XOR XOR => 110 XOR 110 => 000
// Therefore, if we XOR every number in the array, 
// we will be left with the single number.