/*
Delete Node in a BST

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Follow up: Can you solve it with time complexity O(height of tree)?
*/

var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  return dfs(root, key, null);
  // T.C: O(log(N))
  // S.C: O(H)
};

const dfs = (root, key) => {
  if (!root) {
    return null;
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left || !root.right) {
      return root.left || root.right;
    }
    // find the right-most node of left subtree
    let cur = root.left;
    while (cur.right) {
      cur = cur.right;
    }
    root.val = cur.val;
    root.left = dfs(root.left, root.val);
  } else if (root.val > key) {
    root.left = dfs(root.left, key);
  } else {
    root.right = dfs(root.right, key);
  }
  return root;
};
