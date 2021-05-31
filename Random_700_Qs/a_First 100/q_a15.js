/*
Given a collection of distinct integers, return all possible permutations.
*/
function permutation(nums) {
    let res = [], used = [];
    function permute(depth, used, cur) {
        if (depth == nums.length) {
            res.push(cur.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                cur.push(nums[i]);
                used[i] = true;

                // move to the next depth
                permute(depth+1, used, cur);

                // backtrack to the previous partial state
                cur.pop();
                used[i] = false;
            }
        }
        return res;
    }
    return permute(0, used, []);
}

/*
Time Complexity: O(n!)
Space Complexity: O(n!)

Category: Backtracking, DFS
*/