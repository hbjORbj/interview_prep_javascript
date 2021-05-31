/*
Binary Search Tree Iterator

Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
int next() Moves the pointer to the right, then returns the number at the pointer.
Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

*/

/*
T.C: O(N) for initialisation and O(1) for methods
S.C: O(N) for initialisation and O(1) for methods
*/

var BSTIterator = function (root) {
  this.traversal = [];
  this.index = 0;
  dfsTraversal(root, this.traversal);
};

// inorder: left-root-right traversal
const dfsTraversal = (root, traversal) => {
  if (!root) {
    return;
  }
  dfsTraversal(root.left, traversal);
  traversal.push(root.val);
  dfsTraversal(root.right, traversal);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.traversal[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index <= this.traversal.length - 1;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
