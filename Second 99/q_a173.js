/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.
*/

var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast == null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};