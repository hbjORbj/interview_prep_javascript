/*
Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 

“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/*
Use DFS to traverse all nodes. At every node, we check if p or q was found in both left subtree and right subtree. 
If both are found OR one is found and current root is either p or q, return the root.
Else if one of them is found, return true so that the parent knows one of them is found somewhere down the tree
Else return false
*/
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  dfs(root);
  return lca;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return false;
    }
    let left = dfs(root.left, p, q);
    let right = dfs(root.right, p, q);
    let cur = root === p || root === q;
    if ((left && right) || (left && cur) || (right && cur)) {
      lca = root;
    }
    if (lca) {
      return;
    }
    return left || right || cur;
  }
};
