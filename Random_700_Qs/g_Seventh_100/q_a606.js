/*
Subtree of Another Tree

Given the roots of two binary trees root and subRoot, 

return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. 

The tree tree could also be considered as a subtree of itself.
*/

/*
Use DFS to traverse all nodes. At every node, we check if it is equivalent to the given
subroot.
*/
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) {
    return false;
  }
  if (isEqualTree(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  // T.C: O(M*N)
  // S.C: O(H of root)
};

const isEqualTree = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isEqualTree(root1.left, root2.left) &&
    isEqualTree(root1.right, root2.right)
  );
};
