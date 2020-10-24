/*
Given a Linked List with a cycle, find the node where the cycle begins.

Qs:
1. How to return the output? The node at the beginning of cycle?
- Yes.
2. What to return if it does not contain a cycle?
- Return null.
3. Can the entire list be a cycle?
- Yes.
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

console.log(findCycle(node1));

function findCycle(head) {

}

/*
Test Cases:
[1,2,3,4,5] where 5 points to 3 => 3
[] => null
[1,2,3] where 3 points to 1 => 1
*/