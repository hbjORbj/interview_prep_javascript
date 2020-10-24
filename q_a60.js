/*
Is Palindrome: Given a Linked List, determine if it is a Palindrome.

Note​: Do it with O(N) time and O(1) space? (Hint: Reverse a part of the list)

Qs:
1. What to return if the given linked list is empty?
- Return false.
2. Is a linked list of length 1 a palindrome?
- Yes.
3. Is this a singly linked list?
- Yes, there is no previous pointer.
*/
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(isLLPalindrome(node1));

function isLLPalindrome(head) {
    if (head == null) return false;
    let median = findMedian(head);
    let start = head;
    let end = reverseLL(median);
    while (start != null && end != null) {
        if (start.val != end.val) return false;
        start = start.next;
        end = end.next;
    }
    return true;
}

function findMedian(head) {
    let count = 0;
    let cur = head;
    while (cur != null) {
        cur = cur.next;
        count++;
    }
    cur = head;
    for (let i = 0; i < Math.floor(count / 2); i++) cur = cur.next;
    return cur;
}

function reverseLL(head) {
    let prev = null, cur = head, next;
    while (cur != null) { 
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

/*
Test Cases:
[] => false
[1,2,3,2,1] => true
[1] => true

Idea:
1. Reverse the second half of the list. (To do so, I will first find the middle element by counting the number of nodes in the list.)
2. Make two pointers at either end of the list and move them inwards to verify.

Time Complexity: O(n)
Space Complexity: O(1)
*/