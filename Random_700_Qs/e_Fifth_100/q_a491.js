/*
Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
  // T.C: O(N)
  // S.C: O(1)
};
