/*
Combination Sum

Given an array of distinct integers candidates and a target integer target, 

return a list of all unique combinations of candidates where the chosen numbers sum to target. 

You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 

Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

var combinationSum = function (candidates, target) {
  let res = [];
  dfsTraversal(candidates, 0, [], target, res);
  return res;
  // T.C: O(N^M), where N = # of elements in candidates and M = target
  // in the worst case, target becomes the height of tree and we have N elements to choose from at each level
  // S.C: O(N^M)
};

const dfsTraversal = (candidates, start, curPath, remaining, res) => {
  if (remaining === 0) {
    res.push(curPath.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] <= remaining) {
      // include the current node
      curPath.push(candidates[i]);

      // move on to include the current node again
      dfsTraversal(candidates, i, curPath, remaining - candidates[i], res);

      // backtrack
      curPath.pop();
    }
  }
};

/*
Idea:
    1. Use DFS to find all possible combinations and backtrack if the sum of current combination is greater than target
    2. One important thing to notice is that we can choose the same number more than once. Therefore, we repeat including the current node as much as possible
*/
