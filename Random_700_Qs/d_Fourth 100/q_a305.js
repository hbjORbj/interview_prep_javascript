/*
Merge two sorted linked lists and return it as a new sorted list. 

The new list should be made by splicing together the nodes of the first two lists.
*/

var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode();
    let cur = newHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            cur = cur.next;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = cur.next;
            l2 = l2.next;
        }
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;

    return newHead.next;
    // Time Complexity: O(m + n), m = length of l1, n = length of l2
    // Space Complexity: O(1)
};

/*
Compare the values of l1's node and l2's node and append the node with smaller value to our new list, and
advance the pointer of the smaller node to the next. Repeat this process until we reach the end of either list. 
Once we reach the end of either list, we check if there is any remaining node in the other list, 
and if there is, our new list points to that remaining node, else return our new list.
*/