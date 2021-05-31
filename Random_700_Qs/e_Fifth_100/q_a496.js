/*
Remove Linked List Elements

Given the head of a linked list and an integer val,

remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/

// We keep track of previous node, so that when we encounter a node with val,
// we set prev node's next pointer to next node
// if prev is null, next node becomes the new head
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  let prev = null,
    cur = head;
  while (cur !== null) {
    if (cur.val === val) {
      if (prev) {
        prev.next = cur.next;
      } else {
        head = cur.next;
      }
      // we do not update prev here because this node is not part of list
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
