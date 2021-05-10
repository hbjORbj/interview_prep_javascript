/*
Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.
*/

/*
Solution

1. We keep track of prev node and prevPrev node while we iterate through the list.
2. While prev === cur, advance cur until prev != cur; set prevPrev point to cur node so that
the list of duplicate nodes from prev to cur-1 is removed; if prevPrev is null, cur node is the new head
*/
var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  let prev = null,
    prevPrev = null,
    cur = head;
  while (cur !== null) {
    let removed = false;
    while (prev && cur && prev.val === cur.val) {
      removed = true;
      cur = cur.next;
    }
    if (removed) {
      // append the new current node to the valid previous list
      if (prevPrev) prevPrev.next = cur;
      // if there is no previous list to append the new current node to, the new current node is the new head
      else head = cur;
      prev = prevPrev;
    } else {
      // advance all pointers
      prevPrev = prev;
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
