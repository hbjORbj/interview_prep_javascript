/*
Merge two sorted linked lists and return it as a new sorted list. 

The new list should be made by splicing together the nodes of the first two lists.
*/

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) cur.next = l1;
    else if (l2) cur.next = l2;
    
    return dummy.next;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};