/*
Given a singly linked list, determine if it is a palindrome.

Ex) ( 1 -> 2 -> 2 -> 1 ) => true
*/

var isPalindrome = function(head) {
    let halfLen = Math.floor(lengthOfLL(head) / 2);
    let prev = null, cur = head;
    for (let i = 0; i < halfLen; i++) cur = cur.next;
    
    // reverse the right half of the list
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    // now, we move inwards from both left half and right half 
    // and see if all values are the same
    let rightHead = prev;
    while (halfLen > 0) {
        if (head.val !== rightHead.val) return false;
        head = head.next;
        rightHead = rightHead.next;
        halfLen--;
    }
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

function lengthOfLL(head) {
    let len = 0, cur = head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
}