/*
Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous pointers,

it could have a child pointer, which may or may not point to a separate doubly linked list.

These child lists may have one or more children of their own, and so on, 

to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list.

You are given the head of the first level of the list.
*/

var flatten = function (head) {
  if (!head) {
    return null;
  }
  flattenList(head);
  return head;
  // T.C: O(N), we visit every node
  // S.C: O(1)
};

const flattenList = (head) => {
  let cur = head;
  let tail = null;
  while (cur !== null) {
    if (cur.child) {
      let next = cur.next;
      let [flattenedHead, flattenedTail] = flattenList(cur.child);
      cur.child = null;
      cur.next = flattenedHead;
      flattenedHead.prev = cur;

      flattenedTail.next = next;
      if (next) next.prev = flattenedTail;
      cur = flattenedTail; // optimisation
    }
    if (cur.next === null) {
      tail = cur;
    }
    cur = cur.next;
  }
  return [head, tail];
};
