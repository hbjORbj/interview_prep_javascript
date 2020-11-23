/*
Find the median node of a linked list.

Qs:
1. If there is an even number of nodes, which node to return?
- Return either of the 2 middle nodes.
2. Is it guaranteed that the list is acyclic?
- Yes.
3. What to return if the list is empty?
- Return null.
4. If the list is of length 1, return the node?
- Yes.
*/

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(findMedian(node1));

function findMedian(head) {
    if (head == null) return null;
    let slow = head, fast = head;
    while (fast != null) {
        fast = fast.next;
        if (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
    }
    return slow;
}

/*
Test Cases:
[1,2,3,4,5] => 3
[1,2,3,4] => 3
[] => null
[1] => 1

Idea:
Use a slow pointer and a fast pointer. Advance fast pointer by 2 while advancing slow pointer by 1.
When the fast pointer reaches the end of the list, the slow pointer must be pointing to the median.

Time Complexity: O(n)
Space Complexity: O(1)
*/