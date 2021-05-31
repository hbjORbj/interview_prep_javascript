/*
You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order, and each of their nodes contains a single digit. 

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function(l1, l2) {
    let newHead = new ListNode();
     let val = 0, carry = 0;
     let cur = newHead;
     while (l1 || l2) {
         let val1 = l1 ? l1.val : 0;
         let val2 = l2 ? l2.val : 0;
         val = (val1 + val2 + carry) % 10;
         carry = Math.floor((val1 + val2 + carry) / 10);
         cur.next = new ListNode(val);
         cur = cur.next;
         if (l1) l1 = l1.next;
         if (l2) l2 = l2.next;
     }
     if (carry > 0) {
         cur.next = new ListNode(carry); 
     }
     return newHead.next; 
     // Time Complexity: O(max(M, N)), M = length of l1, N = length of l2
     // Space Complexity: O(max(M, N))
 };

/*
1. we need to keep track of carry
a = digit of l1 at position i
b = digit of l2 at position i
after adding a + b
    - digit at position must be (a + b + carry) % 10
    - carray must be updated to Math.floor((a + b + carry) / 10)

2. If l1 and l2 have different lengths and therefore one node is null, we consider the value to be zero and
do the same computation
*/
