/*
Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

/*
Use DFS to find all possible combinations of length nums.length.
Record all combinations in progress.
*/
var subsets = function (nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }
  let res = [];
  dfsTraversal(nums, 0, [], res);
  return res;
  // T.C: O(n * 2^n), there are 2^n possible subsets;
  // we multiply n for copying subset to result array (slice())
  // S.C: O(2^n)
};

const dfsTraversal = (nums, curIdx, curPath, res) => {
  res.push(curPath.slice());

  for (let i = curIdx; i < nums.length; i++) {
    curPath.push(nums[i]);

    dfsTraversal(nums, i + 1, curPath, res);

    curPath.pop();
  }
};
