/*
Jump Game III

Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.
*/

// Recursion, Backtracking
var canReach = function (arr, start) {
  if (arr === null || arr.length === 0) {
    return false;
  }
  return dfs(arr, start);
  // T.C: O(N)
  // S.C: O(N)
};

const dfs = (arr, idx) => {
  if (arr[idx] === 0) {
    return true;
  }
  if (idx < 0 || idx > arr.length - 1 || arr[idx] < 0) {
    return false;
  }
  let jump = arr[idx];
  arr[idx] = -1; // marking this index as visited
  return dfs(arr, idx - jump) || dfs(arr, idx + jump);
};
