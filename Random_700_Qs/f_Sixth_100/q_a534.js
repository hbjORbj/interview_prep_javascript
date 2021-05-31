/*
Combination Sum IV

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.
*/

/*
Since different sequences are counted as different combinations,
we should get permutations instead of combinations (in permutation, order matters)

Use DFS to get all possible permutations but we can revisit a node and also we do not keep
track of the path but just the sum of numbers in the path
*/
var combinationSum4 = function (nums, target) {
  return dfsTraversal(nums, target, new Map());
};

const dfsTraversal = (nums, remaining, memo) => {
  let count = 0;
  if (remaining === 0) {
    return 1;
  }
  if (memo.has(remaining)) {
    return memo.get(remaining);
  }
  for (let i = 0; i < nums.length; i++) {
    if (remaining - nums[i] >= 0) {
      count += dfsTraversal(nums, remaining - nums[i], memo);
    }
  }
  memo.set(remaining, count);
  return count;
};
