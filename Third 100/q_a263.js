// Given the head of a linked list, rotate the list to the right by k places.

var rotateRight = function(head, k) {
    let stack = [], cur = head, len = 0;
    while (cur !== null) {
        stack.push(cur);
        cur = cur.next;
        len++;
    }
    // After rotating len times, the linked list becomes the same as the original one
    // So, we rotate k % len times
    for (let i = 0; i < k % len; i++) {
        let tail = stack.pop();
        tail.next = head;
        head = tail;
        stack[stack.length-1].next = null;
    }
    return head;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

var rotateRight = function(head, k) {
    if (!head) return head;
    let len = 0, prev = null, tail = null;
    let cur = head;
    while (cur !== null) {
        tail = cur;
        cur = cur.next;
        len++;
    }
    
    if (k % len == 0) return head; // rotating zero or a multiple of len times doesn't change anything
    
    cur = head; // re-initialise
    for (let i = 0; i < len - (k % len); i++) {
        prev = cur;
        cur = cur.next;
    }
    prev.next = null;
    tail.next = head;
    head = cur;
    return head;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};