/*
Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

/*
Solution

Two pointer

We use two pointers: slow and fast.
slow pointer advances by 1 while fast pointer advances by 2.

If two pointers meet, there is a cycle in the list
Else there is no cycle
*/
var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null) {
    fast = fast.next;
    if (fast === slow) {
      return true;
    }

    if (fast === null) {
      break;
    }

    fast = fast.next;
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
  }
  return false;
  // T.C: O(N)
  // S.C: O(1)
};
