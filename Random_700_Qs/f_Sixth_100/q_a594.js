/*
Merge Two Binary Trees

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.

Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/

/*
Use DFS to traverse both trees simultaneously
For overlapping nodes, add value to first tree (so we don't use extra space)
For not-overlapping nodes, take one of the NOT-NULL nodes and append it to first tree
Recursively perform this for every node of both trees
*/
var mergeTrees = function (root1, root2) {
  return dfs(root1, root2);
  // T.C: O(min(M, N))
  // S.C: O(min(H1, H2))
};

const dfs = (root1, root2) => {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1 || !root2) {
    return root1 || root2;
  }
  root1.val += root2.val;
  root1.left = dfs(root1.left, root2.left);
  root1.right = dfs(root1.right, root2.right);
  return root1;
};
