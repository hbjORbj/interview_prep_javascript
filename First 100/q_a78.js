/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.
*/

var reverseBetween = function(head, m, n) {
    let start = head, cur = head;
    let curPos = 1;
    while (curPos < m) {
        start = cur;
        cur = cur.next;
        curPos++;
    }

    let prev = null, tail = cur;
    while (curPos <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        curPos++;
    }
    start.next = prev;
    tail.next = cur;
    
    return m == 1 ? prev : head;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
