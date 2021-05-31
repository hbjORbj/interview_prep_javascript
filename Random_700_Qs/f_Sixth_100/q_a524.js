/*
Plus One Linked List

Given a non-negative integer represented as a linked list of digits, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list.
*/

/*
1. Reverse the list
2. Add one and while there is carry, advance pointer one at a time
3. Reverse the list again and return head.
*/
var plusOne = function (head) {
  if (!head) {
    return null;
  }
  let revList = reverseList(head);
  let dummyHead = new ListNode();
  let cur = dummyHead;
  let sum = 0,
    carry = 0;
  revList.val += 1;
  while (revList) {
    sum = revList.val + carry;
    carry = sum > 9 ? 1 : 0;
    revList.val = sum % 10;
    cur.next = revList;
    cur = cur.next;
    revList = revList.next;
    if (carry === 0) {
      // optimisation
      break;
    }
  }
  if (carry > 0) {
    cur.next = new ListNode(1);
  }
  return reverseList(dummyHead.next);
  // T.C: O(N)
  // S.C: O(1)
};

const reverseList = (head) => {
  let prev = null,
    cur = head;
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
