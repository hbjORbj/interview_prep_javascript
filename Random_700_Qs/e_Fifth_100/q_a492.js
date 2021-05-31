/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.

The digits are stored in reverse order, and each of their nodes contains a single digit.

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let cur = head;
  let carry = 0;
  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let sum = l1Val + l2Val + carry;
    carry = sum > 9 ? 1 : 0;
    if (l1) {
      l1.val = sum % 10;
      cur.next = l1;
    } else {
      l2.val = sum % 10;
      cur.next = l2;
    }
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    cur.next = new ListNode(1);
  }
  return head.next;
  // T.C: O(max(M, N)), M = # of nodes in list 1, N = # of nodes in list 2
  // S.C: O(1)
};
