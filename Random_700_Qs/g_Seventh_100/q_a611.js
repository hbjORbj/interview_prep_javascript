/*
Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
1. Traverse nodes in level-order
2. Don't forget to store "null" values in place of empty nodes.
3. Join by a special character (I used $) and return.
*/
var serialize = function (root) {
  let queue = [],
    res = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    node ? res.push(node.val) : res.push("null");
    if (node) queue.push(node.left);
    if (node) queue.push(node.right);
  }
  let i = res.length - 1;
  while (res[i] === "null") i--;
  return res.slice(0, i + 1).join("$");
  // T.C: O(N)
  // S.C: O(N)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") {
    return null;
  }
  let arr = data.split("$"),
    i = 1;
  let queue = [];
  let root = new TreeNode(Number(arr[0]));
  queue.push(root);
  while (queue.length > 0) {
    let left =
      i >= arr.length || arr[i] === "null"
        ? null
        : new TreeNode(Number(arr[i]));
    let right =
      i + 1 >= arr.length || arr[i + 1] === "null"
        ? null
        : new TreeNode(Number(arr[i + 1]));
    i += 2;
    let root = queue.shift();
    root.left = left;
    root.right = right;
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
  }
  return root;
  // T.C: O(N)
  // S.C: O(N)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
