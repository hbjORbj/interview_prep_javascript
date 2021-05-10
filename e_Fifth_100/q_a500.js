/*
Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers.

The most significant digit comes first and each of their nodes contains a single digit.

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
Solution

1. Reverse both lists
2. Add numbers and arrange pointers properly to obtain a new list of sum
3. Reverse the new list
*/
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let cur = head;
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let carry = 0,
    sum = 0;
  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    sum = l1Val + l2Val + carry;
    carry = sum > 9 ? 1 : 0;
    if (l1) {
      l1.val = sum % 10;
      cur.next = l1;
    } else {
      l2.val = sum % 10;
      cur.next = l2;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    cur = cur.next;
  }
  if (carry > 0) {
    cur.next = new ListNode(1);
  }
  let res = reverseList(head.next);
  return res;
  // T.C: O(M + N)
  // S.C: O(1)
};

const reverseList = (head) => {
  let prev = null,
    cur = head;
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
