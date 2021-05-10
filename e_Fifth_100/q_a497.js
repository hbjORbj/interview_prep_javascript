/*
Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome.
*/

/*
1. Get the length of linked list
2. Using the length, reverse the right half of the list
3. One pointer starting at the head of left half and another starting at the right half,
check if the node values are the same up to the median
*/
var isPalindrome = function (head) {
  let len = lengthOfList(head);
  let prev = null,
    cur = head;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    cur = cur.next;
  }
  // Reverse the right half
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // prev is the head of reversed right half
  let headOfRightHalf = prev;
  while (head && headOfRightHalf) {
    if (head.val !== headOfRightHalf.val) {
      return false;
    }
    head = head.next;
    headOfRightHalf = headOfRightHalf.next;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

const lengthOfList = (head) => {
  let cur = head;
  let len = 0;
  while (cur !== null) {
    cur = cur.next;
    len++;
  }
  return len;
};
