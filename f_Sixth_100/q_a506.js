/*
Delete N Nodes After M Nodes of a Linked List

Given the head of a linked list and two integers m and n. Traverse the linked list and remove some nodes in the following way:

Start with the head as the current node.
Keep the first m nodes starting with the current node.
Remove the next n nodes
Keep repeating steps 2 and 3 until you reach the end of the list.
Return the head of the modified list after removing the mentioned nodes.

Follow up question: How can you solve this problem by modifying the list in-place?
*/

/*
Solution

1. When traversing m nodes, keep track of previous node. But, when traversing through n nodes, only advance cur node. After traversing n nodes is done, set prev point to cur node.
If end of list has been reached while traversing m nodes, break
If end of list has been reached while traversing n nodes, set prev point to null and break 
2. After end of list has been reached, return head.
*/
var deleteNodes = function (head, m, n) {
  if (!head) {
    return null;
  }
  let prev = null,
    cur = head;
  while (cur !== null) {
    for (let i = 0; i < m; i++) {
      prev = cur;
      cur = cur.next;
      if (!cur) {
        // end of list has been reached
        break;
      }
    }
    if (cur) {
      for (let i = 0; i < n; i++) {
        cur = cur.next;
        if (!cur) {
          break;
        }
      }
      prev.next = cur;
    }
  }
  return head;
  // T.C: O(N), N = length of list
  // S.C: O(1)
};
