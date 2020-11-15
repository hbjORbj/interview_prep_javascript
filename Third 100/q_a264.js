/*
Given the head of a linked list and two integers m and n. Traverse the linked list and remove some nodes in the following way:

- Start with the head as the current node.
- Keep the first m nodes starting with the current node.
- Remove the next n nodes
- Keep repeating steps 2 and 3 until you reach the end of the list.

Return the head of the modified list after removing the mentioned nodes.

Follow up question: How can you solve this problem by modifying the list in-place?
*/

var deleteNodes = function(head, m, n) {
    let prev = null, cur = head;
    while (cur !== null) {
        for (let i = 0; i < m; i++) {
            if (cur == null) break;
            prev = cur;
            cur = cur.next;
        }
        for (let i = 0; i < n; i++) {
            if (cur == null) break;
            cur = cur.next;
        }
        prev.next = cur;
    }
    return head;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};