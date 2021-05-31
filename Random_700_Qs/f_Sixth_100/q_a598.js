/*
Delete Leaves With a Given Value

Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you can't).
*/

/*
1. Use DFS to traverse nodes in postorder (so that we check the value of parent node after
removing leaf nodes).
2. If a leaf node with the given value is found, we pass a boolean value to the parent node
so that the parent node knows that such leaf node is found and hence deletes it
*/
var removeLeafNodes = function (root, target) {
  let removeRoot = dfs(root, target);
  if (removeRoot) {
    return null;
  }
  return root;
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root, target) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right && root.val === target) {
    return true;
  }
  let left = dfs(root.left, target);
  let right = dfs(root.right, target);
  if (left) {
    root.left = null;
  }
  if (right) {
    root.right = null;
  }
  if (!root.left && !root.right && root.val === target) {
    return true;
  }
};
