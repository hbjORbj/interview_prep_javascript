/*
Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

/*
Use DFS to try all possible combinations

Use start index to avoid duplicate combinations
*/
var combinationSum = function (candidates, target) {
  let res = [];
  dfsTraversal(candidates, 0, target, [], res);
  return res;
  // T.C: O(N^M), where N = # of candidate elements and M = target
  // S.C: O(N^M)
};

const dfsTraversal = (candidates, startIdx, remaining, curPath, res) => {
  if (remaining === 0) {
    res.push(curPath.slice());
  }
  for (let i = startIdx; i < candidates.length; i++) {
    if (remaining - candidates[i] >= 0) {
      curPath.push(candidates[i]);

      dfsTraversal(candidates, i, remaining - candidates[i], curPath, res);

      curPath.pop();
    }
  }
};
