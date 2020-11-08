/*
You are given two non-empty linked lists representing two non-negative integers. 

The most significant digit comes first and each of their nodes contain a single digit. 

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed. 
*/

var addTwoNumbers = function(l1, l2) {
    let head1 = reverseList(l1), head2 = reverseList(l2);
    let dummy = new ListNode();
    let cur = dummy;
    let sum = 0, carry = 0;
    while (head1 || head2) {
        let x = head1 !== null ? head1.val : 0;
        let y = head2 !== null ? head2.val : 0;
        sum = x + y + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (head1 !== null) head1 = head1.next;
        if (head2 !== null) head2 = head2.next;
    }
    if (carry > 0) cur.next = new ListNode(carry);
    return reverseList(dummy.next);
    // Time Complexity: O(max(m,n)), m = length of l1, n = length of l2
    // Space Complexity: O(max(m,n)+1)
};

function reverseList(head) {
    let prev = null, cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}