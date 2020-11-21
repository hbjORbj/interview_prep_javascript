/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.
*/

var deleteDuplicates = function(head) {
    let newHead = new ListNode();
    let cur = newHead, duplicate = 0;
    while (head !== null) {
        if (head.next && head.val == head.next.val) {
            duplicate++;
        } else {
            if (duplicate == 0) {
                cur.next = head;
                cur = cur.next;
            }
            duplicate = 0;
        }
        head = head.next;
    }
    cur.next = null;
    return newHead.next;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};