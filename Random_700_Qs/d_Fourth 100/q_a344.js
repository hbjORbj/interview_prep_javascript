/*
Given an integer array nums, return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
*/

var subsets = function(nums) {
    let res = [];
    combine([], 0);
    return res;
    
    function combine(cur, start) {
        res.push(cur.slice());
        for (let i = start; i < nums.length; i++) {
            cur.push(nums[i]);
            
            combine(cur, i + 1);
            
            cur.pop();
        }
    }
    // Time Complexity: O(n * 2^n)
    // Space Complexity: O(n * 2^n)
};