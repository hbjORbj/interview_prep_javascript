/*
Given a collection of distinct integers, return all possible permutations.
*/

function permutation(nums) {
    if (nums.length == 0) return [];
    let res = [], used = new Array(nums.length).fill(false);
    function permute(depth, used, cur) {
        if (depth == nums.length) {
            res.push(cur.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] == false) { // nums[i] is already being used
                cur.push(nums[i]);
                used[i] = true;

                // move to the next depth
                permute(depth+1, used, cur);

                // backtrack to previous state
                cur.pop();
                used[i] = false; // nums[i] is no more being used
            }
        }
    }
    permute(0, used, []);
    return res;
}
// DFS Recursive solution
// Time Complexity: O(N!)
// Space Complexity: O(N); our function call stack will go as deep as the number of elements to permute, and since
// in this question we use all elements (N) to permute, the space complexity is O(N)

console.log(permutation([1,2,3]));
console.log(permutation([1,2,3,4,5,6]));
console.log(permutation([]));