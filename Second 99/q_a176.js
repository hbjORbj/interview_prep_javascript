/*
Remove all elements from a linked list of integers that have value val.
*/

var removeElements = function(head, val) {
    let dummy = new ListNode();
    let cur = dummy;
    
    while (head !== null) {
        if (head.val !== val) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    cur.next = null;
    return dummy.next;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};