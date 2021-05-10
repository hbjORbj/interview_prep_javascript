/*
Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, 

reverse the nodes of the list from position left to position right, and return the reversed list.
*/

/*
Solution 

1. Find node at `left` and node at `right`.
2. Store prev node of `left` and next node of `right`
3. Reverse the list starting at `left` and ending at `right`
2. Re-arrange pointers so that `prev` points to head of reversed list and
tail of reversed list points to `next`
3. If `prev` is null (left is 1), the head of the reversed list is new head
*/
var reverseBetween = function (head, left, right) {
  if (!head) {
    return null;
  }
  // Keep track of previous node of Left node
  // Keep track of next node of Right node
  let prev = null,
    next = null;
  let cur = head;
  let leftNode = null,
    rightNode = null;
  let pos = 1;
  // Find Left node
  while (cur !== null && pos < left) {
    prev = cur;
    cur = cur.next;
    pos++;
  }
  leftNode = cur;
  // Find Right node
  while (cur !== null && pos < right) {
    cur = cur.next;
    pos++;
  }
  rightNode = cur;
  next = cur.next;

  // Reverse the list from left node to right node
  // Now, rightNode = head of reversed list, leftNode = tail of reversed list
  reverseList(leftNode, rightNode);

  if (prev) {
    // prev node points to head of reversed list
    prev.next = rightNode;
  } else {
    // we have a new head
    head = rightNode;
  }

  // tail of reversed list points to next node
  leftNode.next = next;
  return head;
  // T.C: O(N)
  // S.C: O(1)
};

const reverseList = (start, end) => {
  let prev = null,
    cur = start;
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    if (prev === end) {
      break;
    }
  }
};
