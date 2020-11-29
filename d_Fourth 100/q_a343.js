/*
Given an array nums of distinct integers, return all the possible permutations. 

You can return the answer in any order.
*/

var permute = function(nums) {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    dfs([], 0, visited);
    return res;
    
    function dfs(cur, depth, visited) {
        if (depth == nums.length) {
            res.push(cur.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] == false) {
                visited[i] = true;
                cur.push(nums[i]);
                
                dfs(cur, depth + 1, visited);
                
                cur.pop();
                visited[i] = false;
            }
        }
    }
    
    // Time Complexity: O(N!), number of possible permutations is N! / (N-r)! and therefore N! in this case
	// Space Complexity: O(N); our function call stack will go as deep as the number of elements to permute, and since
	// in this question we use all elements (N) to permute, the space complexity is O(N)
};