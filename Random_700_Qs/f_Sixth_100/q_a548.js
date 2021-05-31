/*
Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

var subsetsWithDup = function (nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  dfsTraversal(nums, 0, [], res);
  return res;
  // T.C: O(N * 2^N)
  // S.C: O(2^N)
};

const dfsTraversal = (nums, curIdx, curPath, res) => {
  res.push(curPath.slice());

  for (let i = curIdx; i < nums.length; i++) {
    // i > curIdx because without this we may skip necessary subsets
    if (i > curIdx && nums[i] === nums[i - 1]) {
      continue;
    }
    curPath.push(nums[i]);

    dfsTraversal(nums, i + 1, curPath, res);

    curPath.pop();
  }
};
