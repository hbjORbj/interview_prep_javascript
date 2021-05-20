/*
Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once.

Return the linked list sorted as well.
*/

/*
First Solution

Create a dummy head. Start iterating through the given linked list
and set dummy head point to the next correct node and advance the pointer.
Repeat this until the end of given linked list is reached.
*/
var deleteDuplicates = function (head) {
  let dummyHead = new ListNode();
  let cur = dummyHead;
  while (head !== null) {
    // logic: we're appending the end node of group of nodes with same value
    if (!head.next || head.val !== head.next.val) {
      cur.next = head;
      cur = cur.next;
    }
    head = head.next;
  }
  return dummyHead.next;
  // T.C: O(N)
  // S.C: O(1)
};

/*
Second Solution

We repeatedly delete duplicate node using pointer until the end of list is reached.
To delete current node, we make previous node point to next node.
We repeatedly do this whenever we find that current node is a duplicate node
(cur.val === prev.val)
*/
var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  let prev = null,
    cur = head;
  while (cur !== null) {
    if (prev && prev.val === cur.val) {
      prev.next = cur.next;
      // prev is not set to cur here because cur is being deleted and
      // therefore not part of list
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
