/*
Write a program to find the node at which the intersection of two singly linked lists begins.
*/

var getIntersectionNode = function(headA, headB) {
    let m = new Map();
    while (headA !== null) {
        m.set(headA, 1);
        headA = headA.next;
    }       
    while (headB !== null) {
        if (m.has(headB)) return headB;
        headB = headB.next;
    }
    return null; // there is no intersection
    // Time Complexity: O(m+n), m = length of list A, n = length of list B
    // Space Complexity: O(max(m,n))
};