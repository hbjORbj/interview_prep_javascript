/*
Reverse a singly linked list.
*/

function reverseList(head) {
    let prev = null, cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}