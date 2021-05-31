/*
Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list.

If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/

/*
Solution

1. Make sure there are at least k nodes ahead of current node. Reverse a group of k nodes. Append this reversed list to new list and set tail of this list point to next node of given list.
2. Advance pointers accordingly.
(current node to next node in given list, current node to tail in new list)
3. Repeat step 1 and 2 until the end of list is reached.
*/
var reverseKGroup = function (head, k) {
  if (!head) {
    return null;
  }
  let dummyHead = new ListNode();
  let newList = dummyHead;
  let cur = head;
  while (cur !== null) {
    // start is at head and cur is at tail of k-group
    let start = cur;
    for (let i = 1; i < k; i++) {
      cur = cur.next;
      if (!cur) {
        return dummyHead.next;
      }
    }
    let next = cur.next; // store next node

    // cur is at head and start is at tail of k-group now
    newList.next = reverseList(start, k);

    // connect tail with next node
    start.next = next;

    // advance new list pointer
    newList = start;

    // advance current list pointer
    cur = next;
  }
  return dummyHead.next;
  // T.C: O(N)
  // S.C: O(1)
};

const reverseList = (head, k) => {
  let prev = null,
    cur = head;
  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
