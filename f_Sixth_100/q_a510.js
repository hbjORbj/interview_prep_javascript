/*
Linked List in Binary Tree

Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.
*/

/*
1. Use DFS to traverse the tree.
2. When a node with the same value of the first node of list is encountered,
start checking if the other nodes are the same. If end of list is reached, we return true.
*/

var isSubPath = function (head, root) {
  if (!head) {
    return true;
  }
  if (!root) {
    return false;
  }
  if (dfsTraversal(root, head)) {
    return true;
  }
  // if head is not sub-path of root, check if it is sub-path of root.left or root.right
  return isSubPath(head, root.left) || isSubPath(head, root.right);
  // T.C: O(M * N), M = # of nodes in list, N = # of nodes in tree
  // S.C: O(H * M)
};

const dfsTraversal = (root, head) => {
  if (!head) {
    return true;
  }
  if (!root || root.val !== head.val) {
    return;
  }
  if (
    dfsTraversal(root.left, head.next) ||
    dfsTraversal(root.right, head.next)
  ) {
    return true;
  }
};
