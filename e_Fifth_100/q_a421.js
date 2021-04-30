/*
Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

var permute = function (nums) {
  let res = [];
  dfsTraversal(nums, [], [], res);
  return res;
  // Time Complexity: O(N!)
  // Space Complexity: O(N); the function call stack will go as deep as the number of elements to permute, and since
  // in this question we use all elements (N) to permute, the space complexity is O(N)
};

const dfsTraversal = (arr, visited, curPath, res) => {
  if (curPath.length === arr.length) {
    res.push(curPath.slice());
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visited[arr[i]]) {
      // visit current node
      curPath.push(arr[i]);
      visited[arr[i]] = true;

      // move to next node
      dfsTraversal(arr, visited, curPath, res);

      // backtrack
      curPath.pop();
      visited[arr[i]] = false;
    }
  }
};
