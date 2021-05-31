/*
Linked List in Binary Tree

Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.
*/

/*
At every node, initiate dfs traversal to check if there exists a path equivalent to given
linked list
*/
var isSubPath = function (head, root) {
  if (!root || !head) {
    return false;
  }
  if (dfs(root, head)) {
    return true;
  }
  return isSubPath(head, root.left) || isSubPath(head, root.right);
  // T.C: O(N * L)
  // S.C: O(H * L)
};

const dfs = (root, head) => {
  if (!head) {
    return true;
  }
  if (!root || root.val !== head.val) {
    return;
  }
  if (dfs(root.left, head.next) || dfs(root.right, head.next)) {
    return true;
  }
};
