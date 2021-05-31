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

const dfs = (root, key, parent) => {
  if (!root) {
    return;
  }
  if (root.val === key) {
    if (!parent) {
      return deletedTree(root);
    } else {
      if (parent.val > root.val) {
        parent.left = deletedTree(root);
      } else {
        parent.right = deletedTree(root);
      }
    }
  } else if (root.val > key) {
    dfs(root.left, key, root);
  } else {
    dfs(root.right, key, root);
  }
  return root;
};

const deletedTree = (root) => {
  if (!root.left && !root.right) {
    return null;
  }
  if (!root.left || !root.right) {
    return root.left || root.right;
  }
  let newTree = rightMostNode(root.left);
  newTree.right = root.right;
  if (newTree !== root.left) {
    let newLeft = leftMostNode(newTree);
    newLeft.left = root.left;
  }
  return newTree;
};
const rightMostNode = (root) => {
  if (!root) {
    return null;
  }
  let prev = null,
    cur = root;
  while (cur && cur.right) {
    prev = cur;
    cur = cur.right;
  }
  if (prev) prev.right = null;
  return cur;
};

const leftMostNode = (root) => {
  if (!root) {
    return null;
  }
  let cur = root;
  while (cur && cur.left) {
    cur = cur.left;
  }
  return cur;
};
