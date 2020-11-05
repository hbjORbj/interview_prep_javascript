/*
Given a singly linked list L: L0 → L1 → … → L(n-1) → Ln,
reorder it to: L0 → Ln → L1 → L(n-1) → L2 → L(n-2) → …

You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

var reorderList = function(head) {
    let len = getLength(head);
    let cur = head;
    
    // reverse the right half list
    for (let i = 0; i < Math.floor(len / 2); i++) {
        cur = cur.next;
    }
    
    let prev = null;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    let rightHead = prev;
    
    return merge(head, rightHead, len);
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

function merge(leftHead, rightHead, length) {
    let dummy = new ListNode();
    let cur = dummy;
    for (let i = 0; i < Math.floor(length/2); i++) {
        cur.next = leftHead;
        leftHead = leftHead.next;
        cur = cur.next;
        
        cur.next = rightHead;
        rightHead = rightHead.next;
        cur = cur.next;
    }
    if (rightHead !== null) cur.next = rightHead;
    return dummy.next;
}

function getLength(head) {
    let len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
}