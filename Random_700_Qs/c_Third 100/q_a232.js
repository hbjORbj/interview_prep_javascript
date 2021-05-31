/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.
*/

var swapPairs = function(head) {
    if (head == null) return null;
    let newHead = new ListNode();
    let ptr = newHead;
    
    let prev = null, cur = head, len = 0;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        len++;
        if (len % 2 == 0) { // at every second node, we point to the reversed sublist
            ptr.next = prev;
            ptr = ptr.next.next; // since the sublist consists of two nodes
        }
    }
    
    if (len % 2 == 1) { // if the list had an odd number of nodes
        ptr.next = prev;
        ptr = ptr.next; // since the last sublist consists of only one node
    }
    ptr.next = null;
    
    return newHead.next;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};