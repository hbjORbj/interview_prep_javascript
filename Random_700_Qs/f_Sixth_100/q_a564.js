/*
Most Frequent Subtree Sum

Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
*/

/*
Use DFS to perform postorder traversal and record every sum's frequency to HashTable
by incrementing it when sum is encountered
*/
var findFrequentTreeSum = function (root) {
  let m = new Map();
  dfsTraversal(root, m);
  let maxFreq = 0;
  for (let [sum, freq] of m) {
    maxFreq = Math.max(maxFreq, freq);
  }
  let res = [];
  for (let [sum, freq] of m) {
    if (freq === maxFreq) {
      res.push(sum);
    }
  }
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

const dfsTraversal = (root, m) => {
  if (!root) {
    return 0;
  }
  let leftSum = dfsTraversal(root.left, m);
  let rightSum = dfsTraversal(root.right, m);
  let sum = leftSum + rightSum + root.val;
  m.set(sum, m.get(sum) + 1 || 1);
  return sum;
};
