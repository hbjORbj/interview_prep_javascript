/*
Linked List Components

We are given head, the head node of a linked list containing unique integer values.

We are also given the list G, a subset of the values in the linked list.

Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.
*/

/*
Create a set out of given array

1. While current node's value doesn't exist in set, simply advance current node

2. While current node's value exists in set, advance current node. If loop stops, that means
there is no more value connected so increment count

3. Repeat step 1 and 2 until the end of linked list
*/
var numComponents = function (head, G) {
  if (!head || !G || G.length === 0) {
    return 0;
  }
  let cur = head;
  let idx = 0,
    count = 0;
  let set = new Set(G);
  while (cur !== null) {
    while (cur && !set.has(cur.val)) {
      cur = cur.next;
    }
    if (!cur) {
      break;
    }
    while (cur && set.has(cur.val)) {
      set.delete(cur.val);
      cur = cur.next;
    }
    count += 1;
  }
  return count;
  // T.C: O(M), M = # of nodes in linked list
  // S.C: O(N), N = # of values in given array
};
