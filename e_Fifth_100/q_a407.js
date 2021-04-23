/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.
*/

const isTreeUnivaluedDFS = (root) => {
  if (!root) return false;
  const val = root.val;
  function isUnivalued(root) {
    if (!root) {
      return;
    }
    if (root.val !== val) {
      return false;
    }
    if (isUnivalued(root.left) === false || isUnivalued(root.right) === false) {
      return false;
    }
    return true;
  }
  return isUnivalued(root);
  // T.C: O(N)
  // S.C: O(H)
};

const isTreeUnivaluedBFS = (root) => {
  if (!root) {
    return false;
  }
  let val = root.val;
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val !== val) {
      return false;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return true;
  // T.C: O(N)
  // S.C: O(N / 2) = O(N), the fattest bottom level can be n / 2 at most
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1, new TreeNode(1), new TreeNode(1, new TreeNode(1)));

console.log(isTreeUnivaluedDFS(root));
console.log(isTreeUnivaluedBFS(root));
