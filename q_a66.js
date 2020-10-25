/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.
*/

var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    function combine(depth, start, cur) {
        res.push(cur.slice());

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i-1]) continue; 
            // for duplicate numbers, we want to recurse only on the first one because we do not want duplicate subsets 
            cur.push(nums[i]);

            combine(depth+1, i+1, cur);

            cur.pop();
        }
    }
    combine(0, 0, []);
    return res;
};