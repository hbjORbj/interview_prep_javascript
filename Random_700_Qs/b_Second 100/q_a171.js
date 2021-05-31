/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again 

by continuously following the next pointer.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

var hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (slow == fast) return true;
        
        if (fast == null) break;
        else fast = fast.next;

        if (slow == fast) return true;
        slow = slow.next;
    }
    return false;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};