/*
You are given a doubly linked list which in addition to the next and previous pointers, 

it could have a child pointer, which may or may not point to a separate doubly linked list. 

These child lists may have one or more children of their own, and so on, to produce a multilevel data structure.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. 

You are given the head of the first level of the list.
*/

var flatten = function(head) {
    let cur = head;
    while (cur !== null) {
        if (cur.child !== null) {
            insertChildList(cur);
        }
        cur = cur.next;
    }    
    return head;
    
    function insertChildList(node) {
        let next = node.next;
        node.next = node.child;
        node.next.prev = node;
        node.child = null;
        while (node.next !== null) node = node.next;
        node.next = next;
        if (next !== null) next.prev = node;
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)