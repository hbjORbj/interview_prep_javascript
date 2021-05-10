/*
Remove Duplicates From an Unsorted Linked List

Given the head of a linked list, find all the values that appear more than once in the list and delete the nodes that have any of those values.

Return the linked list after the deletions.
*/

/*
Solution

Two scans
1. First scan: Iterate through list and record the values with duplicate nodes.
2. Second scan: Keep track of previous node and whenever we encounter node with the recorded value we delete the node (set prev point to next node); if prev is null, next node is the new head
*/
var deleteDuplicatesUnsorted = function (head) {
  if (!head) {
    return null;
  }
  let m = new Map();
  let cur = head;
  while (cur !== null) {
    m.set(cur.val, m.get(cur.val) + 1 || 1);
    cur = cur.next;
  }
  // Re-initialise cur node
  cur = head;
  let prev = null;
  while (cur !== null) {
    if (m.get(cur.val) > 1) {
      if (prev) {
        prev.next = cur.next;
      } else {
        head = cur.next;
      }
      // prev stays the same here because cur is not part of list
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
