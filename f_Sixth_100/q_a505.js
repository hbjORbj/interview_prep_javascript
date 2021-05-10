/*
Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list.

The value of each node in the linked list is either 0 or 1.

The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
*/

var getDecimalValue = function (head) {
  let cur = reverseList(head);
  let pow = 0;
  let sum = 0;
  while (cur !== null) {
    if (cur.val === 1) {
      sum += 2 ** pow;
    }
    pow++;
    cur = cur.next;
  }
  return sum;
  // T.C: O(2N) = O(N)
  // S.C: O(1)
};

const reverseList = (head) => {
  if (!head) {
    return null;
  }
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
