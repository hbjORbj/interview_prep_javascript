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
    // Scan through the linked list and append all nodes whose values are different
    // from "val" to current list which we will return at the end
    // Make sure the last node point to null since it might point to a node
    // whose value is equal to "val"
};