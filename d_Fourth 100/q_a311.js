/*
Reverse a singly linked list.
*/

var reverseList = function(head) {
    let prev = null, cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};

/*
We simply need to make our current node point to its previous node. We do this for every node of the list
and return the new head (which used to be the tail of the original list)
*/