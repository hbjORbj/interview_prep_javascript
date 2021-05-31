/*
Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

/*
Use DFS to traverse two trees simultaneously
If all corresponding nodes don't have the same values, they are not the same
*/
var isSameTree = function (p, q) {
  return dfs(p, q);
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2 || root1.val !== root2.val) {
    return false;
  }
  return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
};
