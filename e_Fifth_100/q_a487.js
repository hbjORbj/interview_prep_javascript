/*
Convert Binary Search Tree to Sorted Doubly Linked List

Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.
*/

// Perform inorder traversal
// Keep track of prev node and cur node
// prev node's right will point to cur node and
// cur node's left will point to prev node
var treeToDoublyList = function (root) {
  if (!root) {
    return null;
  }
  let head = null,
    prev = null,
    cur = null;
  dfsTraversal(root);
  // At the end of traversal, cur is pointing to the tail node
  head.left = cur;
  cur.right = head;
  return head;
  // T.C: O(N)
  // S.C: O(H)
  function dfsTraversal(root) {
    if (!root) {
      return;
    }
    dfsTraversal(root.left);
    if (!head) {
      head = root;
    }
    prev = cur;
    cur = root;
    if (prev) prev.right = cur;
    if (cur) cur.left = prev;
    dfsTraversal(root.right);
  }
};
