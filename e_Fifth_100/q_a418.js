/*
Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list.

The list should be made by splicing together the nodes of the first two lists.
*/

var mergeTwoLists = function (l1, l2) {
  let cur1 = l1,
    cur2 = l2;
  let newHead = new ListNode();
  let newCur = newHead;
  while (cur1 !== null && cur2 !== null) {
    if (cur1.val < cur2.val) {
      newCur.next = cur1;
      newCur = newCur.next;
      cur1 = cur1.next;
    } else {
      newCur.next = cur2;
      newCur = newCur.next;
      cur2 = cur2.next;
    }
  }
  while (cur1 !== null) {
    newCur.next = cur1;
    newCur = newCur.next;
    cur1 = cur1.next;
  }
  while (cur2 !== null) {
    newCur.next = cur2;
    newCur = newCur.next;
    cur2 = cur2.next;
  }
  return newHead.next;
  // T.C: O(M + N)
  // S.C: O(1)
};
