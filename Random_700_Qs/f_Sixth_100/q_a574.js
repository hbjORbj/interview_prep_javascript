/*
Flip Equivalent Binary Trees

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise.
*/

/*
1. Use DFS to traverse both trees simultaneously.
2. If left subtree of root1 and left subtree of root2 are different,
flip left subtree and right subtree of root1. Do this for every node.
3. Check if two trees are equivalent.
*/
var flipEquiv = function (root1, root2) {
  dfs(root1, root2);
  return isSameTree(root1, root2);
  // T.C: O(M + N)
  // S.C: O(max(H1, H2))
};

const dfs = (root1, root2) => {
  if (!root1 || !root2) {
    return;
  }
  if (
    (!root1.left && root2.left) ||
    (root1.left && !root2.left) ||
    (root1.left && root2.left && root1.left.val !== root2.left.val)
  ) {
    let temp = root1.left;
    root1.left = root1.right;
    root1.right = temp;
  }

  dfs(root1.left, root2.left);
  dfs(root1.right, root2.right);
};

const isSameTree = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isSameTree(root1.left, root2.left) &&
    isSameTree(root1.right, root2.right)
  );
};
