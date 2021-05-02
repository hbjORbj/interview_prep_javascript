/*
Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Qs:
1. Is the given list a singly linked list?
- Yes.
2. How do you want the output?
- Return the head.
*/
var rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head;
  }
  let len = lengthOfLL(head);
  k = k % len;
  if (k === 0) {
    // No need to rotate
    return head;
  }

  // Set newTail to x(i)
  // Set newHead to x(i+1)
  let newTail = null;
  let newHead = head;
  for (let i = 0; i < len - k; i++) {
    newTail = newHead;
    newHead = newHead.next;
  }

  // Set tail's next pointer to null
  newTail.next = null;

  // Find x(i+k) and set its next pointer to original head (x0)
  let cur = newHead;
  while (cur.next !== null) {
    cur = cur.next;
  }
  cur.next = head;

  return newHead;
  // T.C: O(N)
  // S.C: O(1)
};

const lengthOfLL = (head) => {
  let cur = head;
  let count = 0;
  while (cur !== null) {
    count++;
    cur = cur.next;
  }
  return count;
};

/*
k = length of list % k because rotating a list to the right by the length of list leaves
the list unchanged.

The last k elements of the list will be shifted to the right.
Hence, we can re-express the list
[x0...xi, x(i+1)...x(i+k)] as [x(i+1)...x(i+k)...x0...xi].

So, x(i+1) will be the new head and xi will be the new tail.
*/
