/*
Given a linked list that has a cycle, find the length of the cycle. The length is in number of nodes.

Qs:
1. If the list is empty, return null?
- Yes.
2. Is it guaranteed that the input list has a cycle?
- Yes.
*/

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node1;


function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(findLengthOfCycle(node1));

function findLengthOfCycle(head) {
    if (head == null) return null;
    let slow = head, fast = head;
    while (fast != null) {
        fast = fast.next;
        if (slow == fast) break;
        if (fast != null) {
            fast = fast.next;
            if (slow == fast) break;
        }
        slow = slow.next;
    }
    return countLength(slow);
}

function countLength(node) {
    let cur = node.next, counter = 1; // node.next cannot be null because we are in a cycle
    while (cur !== node) {
        cur = cur.next;
        counter++;
    }
    return counter;
}
/*
Test Cases:
[1,2,3,4,5] where 5 points to 2 => 4
[1,2,3] where 3 points to 1 => 3
[] => 0

Idea:
Use two pointers, a slow pointer and a fast pointer.
We advance fast pointer by 2 while we advance slow pointer by 1.
Once they meet, by advancing by 1, 
we count how many nodes it takes to come back to the same node.
*/