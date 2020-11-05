/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 

following the next pointer. 

Notice that you should not modify the linked list.
*/

var detectCycle = function(head) {
    let len = lengthOfCycle(head);
    if (len == 0) return null; // there is no cycle

    let ptr1 = head, ptr2 = head;

    for (let i = 0; i < len; i++) { // advance ptr2 ahead by the length of cycle
        ptr2 = ptr2.next;
    }

    while (ptr1 !== ptr2) { // both pointers start to advance by one and 
                            // where they meet is the beginning of cycle
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

function lengthOfCycle(head) {
    let slow = head, fast = head;
    
    // check if there is cycle
    // if so, slow == fast when the loop breaks,
    // else, fast == null
    while (fast !== null) {
        fast = fast.next;
        if (slow == fast) break;
        if (fast !== null) fast = fast.next;
        if (slow == fast) break;
        slow = slow.next;
    }

    let len = 0;
    
    // find the length of cycle
    while (fast !== null) {
        fast = fast.next; 
        len++;
        if (slow == fast) break;
    }
    return len;
};