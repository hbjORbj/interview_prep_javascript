/*
Merge In Between Linked Lists

You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

Build the result list and return its head.
*/

/*
Qs
1. What if list1 is null?
2. What if list2 is null?
3. What if [a,b] sub-list is out of bounds?
*/
var mergeInBetween = function (list1, a, b, list2) {
  if (!list1) {
    return null;
  }
  let prev = null,
    cur = list1;
  for (let i = 0; i < a; i++) {
    prev = cur;
    cur = cur.next;
  }
  // cur is at start of [a,b] sub-list
  for (let i = 0; i < b - a; i++) {
    cur = cur.next;
  }
  // cur is at end of [a,b] sub-list

  // if list2 is empty
  if (!list2) {
    prev.next = cur.next;
    return list1;
  }

  // push list 2 in between prev and next
  prev.next = list2;
  let tail = getTail(list2);
  tail.next = cur.next;

  return list1;
  // T.C: O(M + N), where M = length of list1, N = length of list2
  // S.C: O(1)
};

const getTail = (head) => {
  if (!head) {
    return null;
  }
  let cur = head;
  while (cur.next !== null) {
    cur = cur.next;
  }
  return cur;
};
