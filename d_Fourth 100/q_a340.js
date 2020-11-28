/*
Write a program to find the node at which the intersection of two singly linked lists begins.
*/

var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA), lenB = getLength(headB);
    let curA = headA, curB = headB;
    for (let i = 0; i < Math.abs(lenA - lenB); i++) {
        if (lenA > lenB) {
            curA = curA.next;
        } else {
            curB = curB.next;
        }
    }
    while (curA !== curB && curA && curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
    // Time Complexity: O(m + n)
    // Space Complexity: O(1)
};

function getLength(head) {
    let len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
}