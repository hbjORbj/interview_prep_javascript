/*
Reorder List

You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/

/*
1. Reverse the right half
2. Keep two pointers, one at the head of left half, the other at the head of reversed right half
3. Append left node, advance, append right node, advance, and repeat this until either half reaches the end
*/
var reorderList = function (head) {
  let dummyHead = new ListNode();
  let cur = dummyHead;
  let slow = head,
    fast = head;
  while (fast !== null) {
    fast = fast.next;
    if (fast === null) {
      break;
    }
    fast = fast.next;
    slow = slow.next;
  }
  // slow is at the middle node
  let rightHead = reverseList(slow);
  let leftHead = head;

  // Start traversing from left and right
  while (leftHead && rightHead) {
    cur.next = leftHead;
    cur = cur.next;
    leftHead = leftHead.next;

    cur.next = rightHead;
    cur = cur.next;
    rightHead = rightHead.next;
  }

  // Cut off list at tail
  cur.next = null;
  return dummyHead.next;
  // T.C: O(N)
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
