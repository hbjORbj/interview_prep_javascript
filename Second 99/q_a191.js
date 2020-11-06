/*
Write a program to find the node at which the intersection of two singly linked lists begins.
*/

/*
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
*/

var getIntersectionNode = function(headA, headB) {
    let len1 = getLength(headA), len2 = getLength(headB);
    if (len1 < len2) {
        for (let i = 0; i < len2-len1; i++) {
            headB = headB.next;
        }    
    }
    else {
        for (let i = 0; i < len1-len2; i++) {
            headA = headA.next;
        }
    }
    while (headA !== null) {
        if (headA == headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
    // Time Complexity: O(m+n)
    // Space Complexity: O(1)
}

function getLength(head) {
    let len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
}