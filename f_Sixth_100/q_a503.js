/*
Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 

Return the linked list sorted as well.
*/

/*
Solution

1. We keep track of previous node
2. If prev's value == cur's value
        set prev node point to next node        
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
      // prev node stays the same because current node is not part of list
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
