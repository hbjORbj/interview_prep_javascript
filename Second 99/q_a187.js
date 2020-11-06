/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?
*/

var removeNthFromEnd = function(head, n) {
    let ptr1 = head, ptr2 = head;
    for (let i = 0; i < n; i++) {
        ptr2 = ptr2.next;
    }
    if (ptr2 == null) { 
        // we need to delete the first node
        head = head.next;
    }
    else {
        while (ptr2.next !== null) {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        ptr1.next = ptr1.next.next;   
    }
    return head;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};