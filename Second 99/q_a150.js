/*
Reverse a linked list from position m to n. Do it in one-pass.

Ex) 
1 -> 2 -> 3 -> 4 -> 5 -> NULL, m = 2, n = 4
=>
1 -> 4 -> 3 -> 2 -> 5 -> NULL
*/

var reverseBetween = function(head, m, n) {
    let start = head, cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }
    let prev = null, tail = cur;
    while (i <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    start.next = prev;
    tail.next = cur;
    return m == 1 ? prev : head;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};