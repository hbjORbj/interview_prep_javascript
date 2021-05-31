/*
Binary Search Tree Iterator

Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

- BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor.
The pointer should be initialized to a non-existent number smaller than any element in the BST.
- boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
- int next() Moves the pointer to the right, then returns the number at the pointer.
Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

You may assume that next() calls will always be valid.

That is, there will be at least a next number in the in-order traversal when next() is called.
*/

/*
First Solution

Implement a class that works as an iterator over the in-order traversal of a BST.

in-order: left, root, right

1. At initialisation, use dfs to traverse the given tree in in-order and store an array of all nodes values of
the traversal. Initialise an index to zero.
2. For next(), return the value at current index and increment index by 1.
3. For hasNext(), check if the index is less than array's length. If so, return true, else return false.
*/
class BSTIterator {
  constructor(root) {
    this.arr = dfs(root);
    this.idx = 0;
    // T.C: O(N)
    // S.C: O(N)
  }

  hasNext() {
    return this.idx < this.arr.length;
    // T.C: O(1)
    // S.C: O(1)
  }

  next() {
    return this.arr[this.idx++];
    // T.C: O(1)
    // S.C: O(1)
  }
}

const dfs = (root, arr = []) => {
  if (!root) {
    return;
  }
  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
  return arr;
};

/*
Second Solution
More Efficient

Implement a class that works as an iterator over the in-order traversal of a BST.

in-order: left, root, right
*/
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.traverseLeft(root);
    // T.C: O(N), in fact it won't take O(N) unless given tree is a skewed tree
    // S.C: O(H)
  }

  hasNext() {
    return this.stack.length > 0;
    // T.C: O(1)
    // S.C: O(1)
  }

  next() {
    let node = this.stack.pop();
    if (node.right !== null) {
      this.traverseLeft(node.right);
    }
    return node.val;
    // T.C: O(N), which is not so often because it is very rare that the
    // left subtree  contains N nodes. The worst case where it takes O(N) will only
    // be when we deal with a skewed tree. Hence, amortised time complexity is O(1).
    // Let's say we call next() N times. We push once and pop once for each node.
    // Hence, we have O(2*N), which gives an amortised time complexity of O(1)
    // S.C: O(H)
  }

  traverseLeft(root) {
    while (root !== null) {
      this.stack.push(root);
      root = root.left;
    }
  }
}
