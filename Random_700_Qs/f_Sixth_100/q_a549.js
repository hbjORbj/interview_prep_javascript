/*
Permutations

Given an array nums of distinct integers, return all the possible permutations.

You can return the answer in any order.
*/

/*
Use DFS to find every possible path

if depth of path equals given array's length, 
there is no more node to visit further, so backtrack and find other valid paths
*/
var permute = function (nums) {
  let visiting = new Map();
  let res = [];
  dfsTraversal(nums, [], visiting, res);
  return res;
  // T.C: O(N!), there are N! permutations
  // S.C: O(H), call stack can go as deep as height of tree
};

const dfsTraversal = (nums, curPath, visiting, res) => {
  if (curPath.length === nums.length) {
    res.push(curPath.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!visiting.get(nums[i])) {
      curPath.push(nums[i]);
      visiting.set(nums[i], true);

      // move to next node
      dfsTraversal(nums, curPath, visiting, res);

      // backtrack
      curPath.pop();
      visiting.set(nums[i], false);
    }
  }
};
