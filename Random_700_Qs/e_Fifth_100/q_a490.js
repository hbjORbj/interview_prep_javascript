/*
Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

var mergeKLists = function (lists) {
  let head = new ListNode();
  let cur = head;
  while (true) {
    let nextNodeIdx = -1;
    for (let i = 0; i < lists.length; i++) {
      if (
        lists[i] !== null &&
        (nextNodeIdx === -1 || lists[i].val < lists[nextNodeIdx].val)
      ) {
        nextNodeIdx = i;
      }
    }
    if (nextNodeIdx === -1) {
      // every list has reached its end
      break;
    }
    cur.next = lists[nextNodeIdx]; // let the current list point to the chosen node
    cur = cur.next; // advance the pointer of current list
    lists[nextNodeIdx] = lists[nextNodeIdx].next; // advance the pointer of the chosen node
  }
  return head.next;
  // T.C: O(N), N = # of all nodes
  // S.C: O(1), we simply arranged pointers
};
