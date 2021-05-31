/*
Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list.

The list should be made by splicing together the nodes of the first two lists.
*/

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let cur = head;
  let cur1 = l1,
    cur2 = l2;
  while (cur1 !== null && cur2 !== null) {
    if (cur1.val < cur2.val) {
      cur.next = cur1; // point new list to this node
      cur1 = cur1.next; // advance ptr of list 1
    } else {
      cur.next = cur2; // point new list to this node
      cur2 = cur2.next; // advance ptr of list 2
    }
    cur = cur.next; // advance ptr of new list
  }
  // in case the end of one list is reached earlier
  if (cur1 !== null) {
    cur.next = cur1;
  }
  if (cur2 !== null) {
    cur.next = cur2;
  }
  return head.next;
  // T.C: O(min(M, N)), M = length of l1, N = length of l2
  // S.C: O(1), we simply rearrange pointers
};
