/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/

// Bottom-Up Approach
var copyRandomList = function(head) {
    let m = new Map();
    function copyList(head) {
        if (!head) return null;
        if (m.has(head)) return m.get(head);
        let newNode = new Node();
        m.set(head, newNode);
        newNode.val = head.val;
        newNode.next = copyList(head.next);
        newNode.random = copyList(head.random);
        return newNode;
    }
    return copyList(head);
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};