/*
Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning 

and the kth node from the end (the list is 1-indexed).
*/

/*
Solution

1. Initialise two pointers A and B to head.
2. Advance A by k and store the first k-th node.
3. Advance A by one more node. Now, while A is not null, advance both A and B.
Because A is more advanced than B by k, when A reaches the end of list, B will be at the
node k from the end of list
*/
var swapNodes = function (head, k) {
  if (!head) {
    return null;
  }
  let A = head,
    B = head;
  for (let i = 1; i < k; i++) {
    A = A.next;
  }
  let firstKNode = A;
  A = A.next;

  // A is more advanced than B by k
  // So, when A reaches the end of list, B will be at the node k from the end
  while (A) {
    A = A.next;
    B = B.next;
  }
  // B is at second k-th node
  let firstKVal = firstKNode.val;
  firstKNode.val = B.val;
  B.val = firstKVal;
  return head;
  // T.C: O(N)
  // S.C: O(1)
};
