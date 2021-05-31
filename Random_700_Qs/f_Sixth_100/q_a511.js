/*
Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.
*/

var oddEvenList = function (head) {
  if (!head) {
    return null;
  }
  let dummyHeadOdd = new ListNode();
  let dummyHeadEven = new ListNode();
  let curOdd = dummyHeadOdd;
  let curEven = dummyHeadEven;
  let cur = head,
    idx = 1;
  while (cur !== null) {
    if (idx % 2 === 1) {
      curOdd.next = cur;
      curOdd = curOdd.next;
    } else {
      curEven.next = cur;
      curEven = curEven.next;
    }
    cur = cur.next;
    idx++;
  }
  curEven.next = null;
  curOdd.next = dummyHeadEven.next;
  return dummyHeadOdd.next;
  // T.C: O(N)
  // S.C: O(1)
};
