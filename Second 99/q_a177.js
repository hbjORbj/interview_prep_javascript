/*
Given head which is a reference node to a singly-linked list. 

The value of each node in the linked list is either 0 or 1. 

The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
*/

var getDecimalValue = function(head) {
    let exponent = getLengthOfLL(head)-1;
    let number = 0;
    while (head !== null) {
        number += head.val * 2**exponent;
        head = head.next;
        exponent--;
    }
    return number;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}

function getLengthOfLL(head) {
    let len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
}