/*
You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order, and each of their nodes contains a single digit. 

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(3);

const node4 = new ListNode(5);
const node5 = new ListNode(6);
const node6 = new ListNode(4);
const node7 = new ListNode(7);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;

var addTwoNumbers = function(l1, l2) {
    let carry = 0, sum = 0;
    let dummy = new ListNode();
    let cur = dummy;
    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        sum = (x + y + carry);
        carry = Math.floor(sum / 10);   
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) cur.next = new ListNode(carry);
    return dummy.next;
};
// Time Complexity: O(max(m,n)), m = length of l1, n = length of l2
// Space Complexity: O(max(m,n)+1)

console.log(addTwoNumbers(node1, node4)); // => [7,0,8,7]
