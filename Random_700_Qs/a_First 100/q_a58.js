/*
Find if a given Linked List has a cycle.

Qs to ask:
1. Is it a singly linked list?
- Yes.
2. What to return if the list is empty?
- Return false.
3. What to return if the list is of length 1?
- Return false.
*/

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast != null) {
    fast = fast.next; // fast pointer should advance first; if slow pointer advances first, we will get false true.
    if (slow == fast) return true;
    if (fast != null) {
      fast = fast.next;
      if (slow == fast) return true;
    }
    slow = slow.next;
  }
  return false;
}

console.log(hasCycle(node1));
/*
Test Cases:
[1,2,3,4,5] where 5 points to 3 => true
[] => false
[1] => false

We use a slow pointer, which advances by one node, and a fast pointer, which advances by two nodes.
If the two pointers meet, the list has a cycle. If the fast pointer reaches the end of the list, there is no cycle.
If a linked list has a cycle, a slow pointer and a fast pointer must meet within two revolutions.

Time Complexity: O(n)
Space Complexity: O(1)
*/
