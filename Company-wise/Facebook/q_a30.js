/*
Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/

/*
1. Iterate through linked list while keeping track of previous node.
2. If node with target value is encountered, remove current element by setting previous node's next to
the next node. If previous node is null, that means that we are removing the head. Hence, we set the head to the next node.
*/
var removeElements = function (head, val) {
  let cur = head,
    prev = null;
  while (cur !== null) {
    if (cur.val === val) {
      if (prev) prev.next = cur.next;
      else head = cur.next;
      // we do not need to change prev node here because
      // current element is being deleted and no longer part of list
    } else {
      prev = cur; // keep track of previous node
    }
    cur = cur.next;
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
