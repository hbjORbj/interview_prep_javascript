/*
Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.

If the two linked lists have no intersection at all, return null.

It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.
*/

/*
Solution

1. Get length of both lists.
2. Advance the pointer of longer list by the difference of lengths of lists
so that the pointers of two lists can meet at the intersection
*/
var getIntersectionNode = function (headA, headB) {
  let len1 = lengthOfList(headA);
  let len2 = lengthOfList(headB);
  let cur1 = headA,
    cur2 = headB;
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) {
      cur1 = cur1.next;
    }
  } else {
    for (let i = 0; i < len2 - len1; i++) {
      cur2 = cur2.next;
    }
  }
  while (cur1 && cur2) {
    if (cur1 === cur2) {
      return cur1;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return null;
  // T.C: O(M + N)
  // S.C: O(1)
};

const lengthOfList = (head) => {
  let cur = head;
  let len = 0;
  while (cur !== null) {
    cur = cur.next;
    len++;
  }
  return len;
};
