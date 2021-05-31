/*
Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Qs:
1. Is the given list a singly linked list?
- Yes.
2. How do you want the output?
- Return the head.
*/
var rotateRight = function (head, k) {
  if (head === null) {
    return head;
  }
  let len = lengthOfLL(head);
  k = k % len;
  if (k === 0) {
    return head;
  }
  // Reverse the entire list
  head = reverseLL(head, null);

  // Find the tail of first k-node list
  let tail1 = head;
  for (let i = 0; i < k; i++) {
    tail1 = tail1.next;
  }
  // Reverse the first k-node list
  let head1 = reverseLL(head, tail1);
  // Reverse the remaining list
  let head2 = reverseLL(tail1, null);
  // Chain two lists
  let cur = head1;
  while (cur.next !== null) {
    cur = cur.next;
  }
  cur.next = head2;
  return head1;
  // T.C: O(N)
  // S.C: O(1)
};

const reverseLL = (head, tail) => {
  let prev = null;
  let cur = head;
  while (cur !== tail) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const lengthOfLL = (head) => {
  let count = 0;
  let cur = head;
  while (cur !== null) {
    cur = cur.next;
    count++;
  }
  return count;
};
