/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 

Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Questions to ask: 
1. Since a, b and c must add up to zero, the array could contain negative numbers. Am I correct?
2. Can the input array contain zeros?
3. Can the input array contain duplicates?
4. Can I assume that I can't use the same element twice?

I will assume YES to all questions above.
*/

function threeSum(nums) {
    if (nums.length < 3) return [];
    nums.sort((a,b) => a-b);
    let res = [];
    function combine(depth, start, cur) {
        if (depth == 3) {
            if (cur.reduce((acc,cur)=>acc+cur) == 0) res.push(cur.slice());
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i-1]) continue;
            cur.push(nums[i]);

            // move to the next depth
            combine(depth+1, i+1, cur);

            // backtrack to previous state
            cur.pop();
        }
        return res;
    }
    return combine(0, 0, []);
}
/*
Test Cases: [0,2,3,-1,-3,-1,2] => [[2,-1,-1], [3,-3,0]]
[-1,-1,0,2,2,3]
Idea: Same Approach to getting combinations of numbers but with a constraint that length should be 3 and sum should be zero.

Category: Combination, DFS

Time Complexity: O(k* C(n, k)) from k = 1 to k = 3
Space Complexity: O(C(n,3))
*/