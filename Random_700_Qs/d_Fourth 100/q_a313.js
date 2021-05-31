// Given a singly linked list, determine if it is a palindrome.

/*
Idea: We will reverse the right half of the list and we will advance two pointers, one from each end, to see if the list is a palindrome. 
To do so, first, we move forward until we reach the middle node. 
Now, we reverse the right half.
*/
var isPalindrome = function(head) {
    if (!head) return true;
    let slow = head, fast = head, len = 1;
    while (fast !== null) {
        fast = fast.next;
        if (!fast || !fast.next) break;
        else fast = fast.next;
        slow = slow.next;
        len++;
    }
    // Now, slow refers to the middle node
    let prev = slow, cur = prev.next;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // Now, prev refers to the head of the reversed right half
    let left = head, right = prev;
    for (let i = 0; i < len; i++) {
        if (left.val == right.val) {
            left = left.next;
            right = right.next;
        }
        else {
            return false;
        }
    }
    return true;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};