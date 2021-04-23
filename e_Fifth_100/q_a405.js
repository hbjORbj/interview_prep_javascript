/*
Given a Linked List, determine if it is a Palindrome.

Qs:
1. Is the given linked list a singly linked list?
- Yes.
2. What if the list is empty?
- Return false.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const isPalindrome = (head) => {
  if (head === null) return null;
  // Get median
  let median = findMedian(head);
  // Reverse the right half of the list
  let tail = reverseLL(median);
  while (head !== null && tail !== null) {
      if (head.val !== tail.val) return false;
      head = head.next;
      tail = tail.next;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

const findMedian = head => {
    let fast = head, slow = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast === slow) break;

        if (fast === null) break;
        fast = fast.next;

        if (fast === slow) break;
        slow = slow.next;
    }
    return slow;
}
const reverseLL = head => {
    let prev = null, cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

const test1 = () => {
  let node1 = new ListNode("A");
  let node2 = new ListNode("B");
  let node3 = new ListNode("C");
  let node4 = new ListNode("B");
  let node5 = new ListNode("A");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  console.log(isPalindrome(node1));
};

const test2 = () => {
  let node1 = new ListNode("A");
  let node2 = new ListNode("B");
  let node3 = new ListNode("C");
  let node4 = new ListNode("A");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  console.log(isPalindrome(node1));
};

const test3 = () => {
  let node1 = new ListNode("K");
  let node2 = new ListNode("A");
  let node3 = new ListNode("A");
  let node4 = new ListNode("K");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  console.log(isPalindrome(node1));
};

test1(); // => true
test2(); // => false
test3(); // => true
