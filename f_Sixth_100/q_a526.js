/*
Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
*/

/*
1. Create a list for nodes less than x.
2. When a node is less than x, append it to the new list and remove it from the current list
3. Connect the two lists such that the lessThan list comes first.
*/
var partition = function (head, x) {
  if (!head) {
    return head;
  }
  let lessThanHead = new ListNode(),
    lessThanPtr = lessThanHead;
  let prev = null,
    cur = head;
  while (cur !== null) {
    if (cur.val < x) {
      lessThanPtr.next = cur;
      lessThanPtr = lessThanPtr.next;
      if (prev) prev.next = cur.next;
      else head = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  lessThanPtr.next = head;
  return lessThanHead.next;
  // T.C: O(N)
  // S.C: O(1)
};
