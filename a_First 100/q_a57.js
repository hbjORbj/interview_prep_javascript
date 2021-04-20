/*
Reverse a linked list. You should use O(1) space.

Qs to ask:
1. Is it a singly linked list?
- Yes, there is no previous pointer.
2. What to return if the list is empty?
- Return null.
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseList = (head) => {
  let prev = null,
    cur = head,
    next = null;
  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log(reverseList(node1));
/*
Test Cases:
[] => null
[1] => [1]
[1,2,3] => [3,2,1]

Idea: Keep three pointers. Let the current node point to the previous node, and move all three pointers ahead by one and
repeat this process until there is no more node to reverse. 

Time Complexity: O(n)
Space Complexity: O(1)
*/
