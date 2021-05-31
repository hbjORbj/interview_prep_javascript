/*
Flatten Binary Tree to Linked List

Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list
and the left child pointer is always null.

The "linked list" should be in the same order as a pre-order traversal of the binary tree.
*/

/*
Solution: Recursion
We should turn the entire tree into a right-most skewed tree.
1. We traverse nodes in post-order because we need to turn every subtree into a right-most skewed tree
2. We keep track of right-most node (tail of right subtree) for every tree because we will put our left subtree
between root node and right subtree. We will do this at each tree: root receives left subtree's right-most node, set its right pointer to current root's right subtree, make left subtree null and return right-most node again.
*/
var flatten = function (root) {
  dfs(root);
  return root;
  // T.C: O(N)
  // S.C: O(H)
};

function dfs(root) {
  if (!root) {
    return null;
  }
  if (!root.left && !root.right) {
    return root;
  }
  let leftTail = dfs(root.left);
  let rightTail = dfs(root.right);
  // we put left subtree between root and right subtree
  if (leftTail) {
    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
  }
  // if right subtree is empty, right subtree's tail is actually left subtree's tail
  if (!rightTail) {
    rightTail = leftTail;
  }
  return rightTail;
}

/*
Solution:

We need to turn given tree into a right-most skewed tree.

At each root, if it has a left child, we do the following operation:
left subtree's right-most node = root's right subtree
right subtree = left leftsubtree
left subtree = null

Then, we traverse right because left node will be null at this point
*/
var flatten = function (root) {
  let cur = root;
  // every time root has a left child
  // we rearrange so that left subtree gets placed in the correct position of right subtree
  while (cur !== null) {
    // ensure that left subtree is moved to the right subtree
    // and hence left subtree is null
    if (cur.left) {
      rightMost = findRightMost(cur.left);
      rightMost.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }
    // left subtree is null so there is no need to traverse left
    cur = cur.right;
  }
  return root;
  // T.C: O(N), we traverse each node twice at most
  // S.C: O(1)
};

function findRightMost(root) {
  let cur = root;
  while (cur.right) {
    cur = cur.right;
  }
  return cur;
}
