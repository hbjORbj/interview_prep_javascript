/*
Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Qs:
1. Is the given list a singly linked list?
- Yes.
2. For the output, do we return the root of the new tree?
- Yes.
*/

const sortedListToBST = (head) => {
  return buildBST(head);
  function buildBST(head) {
    if (head === null) return null;
    let median = findMedian(head);
    let root = new TreeNode(median.val);
    root.right = buildBST(median.next);

    // find previous node of median node
    let prev = findPrev(head, median);
    if (prev) {
      prev.next = null;
      root.left = buildBST(head);
    } else {
      root.left = null;
    }
    return root;
  }
  // T.C: O(N*log(N)), O(N) for finding median and previous node, and this repeats for O(log(N)) times
  // S.C: O(N), for new tree
};

const findMedian = (head) => {
  let fast = head,
    slow = head;
  while (fast !== null) {
    fast = fast.next;
    if (fast === null) break;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

const findPrev = (head, median) => {
  if (head === median) return null;
  let prev = head;
  while (prev.next !== median) {
    prev = prev.next;
  }
  return prev;
};
