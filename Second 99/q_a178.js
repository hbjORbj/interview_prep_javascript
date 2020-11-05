/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 

Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let set = new Set(), res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i-1]) continue; // avoid duplicate triplets
        let m = new Map();
        for (let j = i+1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (m.has(-sum)) {
                set.add(`${nums[i]}#${-sum}#${nums[j]}`);
            }
            m.set(nums[j], j);
        }
    }
    for (let key of set) {
        res.push(key.split("#"));
    }
    return res;
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)
};