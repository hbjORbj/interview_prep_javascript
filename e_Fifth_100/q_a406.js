/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.
*/

// We pass a new array with the current node's value instead of directly pushing the value into the array
// because array is a mutable object and the result will be incorrect.
const binaryPaths = (root) => {
  let paths = [];
  function dfsTraversal(curPath, root) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      paths.push([...curPath, root.val]);
      return;
    }
    dfsTraversal([...curPath, root.val], root.left);
    dfsTraversal([...curPath, root.val], root.right);
  }
  dfsTraversal([], root);
  return paths.map((path) => path.join("->"));
  // Time Complexity: O(N), we always visit all nodes
  // Space Complexity: O(H) or O(N), height can be at most N (in case of a skewed tree)
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(0, new TreeNode(1), new TreeNode(2, new TreeNode(3)));

console.log(binaryPaths(root));

// Using only one array
var binaryPaths2 = function (root) {
  let paths = [];
  function dfsTraversal(curPath, root) { // preorder tree traversal
    if (!root) return;
    curPath.push(root.val);
    if (root.left === null && root.right === null) { // found a leaf; store the current path to a global array
      paths.push(curPath.join("->"));
    }
    dfsTraversal(curPath, root.left); // go left
    dfsTraversal(curPath, root.right); // go right
    curPath.pop(); // pop the current node before returning to parent node 
                   // because the current node should not exist in the path of the parent node
  }
  dfsTraversal([], root);
  return paths;
  // T.C: O(N)
  // S.C: O(H)
};

console.log(binaryPaths2(root));
