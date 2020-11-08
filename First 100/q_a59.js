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
node5.next = node2;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(findCycle(node1));

function findCycle(head) {
    let cycleLen = findLengthOfCycle(head);
    if (cycleLen == 0) return null; // no cycle found
    let ptr1 = head, ptr2 = head;
    for (let i = 0; i < cycleLen; i++) ptr2 = ptr2.next; 
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
}

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
    if (fast == null) return 0; // no cycle found
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
[1,2,3,4,5] where 5 points to 2 => 2
[] => null
[1,2,3] where 3 points to 1 => 1


Detect a cycle, then find the length of the cycle.
Once you know the length of the cycle, it makes things easier. Let's say the length is N.
Simply take 2 pointers ​A​ and ​B​, both at the start of the list. Move​ A​ forward by the N nodes.
Now, advance both pointers by 1 until they meet. The node at which they meet will be the start of the cycle.

Why?
Once you've found the length of the cycle (N nodes), 
then if 2 pointers are N nodes apart, they will eventually meet at the start when you move them forward together.

Time Complexity: O(n)
Space Complexity: O(1)
*/