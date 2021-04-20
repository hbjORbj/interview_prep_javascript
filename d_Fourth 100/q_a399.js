/*
You are given a Linked List with nodes that have values 0, 1 or 2. Sort the linked list.

Qs:
1. Do I need to sort in place?
- No, you just need to rearrange the existing nodes.
2. How do you want the output?
- Return the head of the sorted linked list.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const sortList = (head) => {
  let head0 = new ListNode(),
    head1 = new ListNode(),
    head2 = new ListNode();

  let ptr0 = head0,
    ptr1 = head1,
    ptr2 = head2;

  let cur = head;
  while (cur !== null) {
    if (cur.val === 0) {
      ptr0.next = cur;
      ptr0 = ptr0.next;
    } else if (cur.val === 1) {
      ptr1.next = cur;
      ptr1 = ptr1.next;
    } else {
      ptr2.next = cur;
      ptr2 = ptr2.next;
    }
    cur = cur.next;
  }
  // Set tails to null
  if (ptr0 !== null) {
    ptr0.next = null;
  }
  if (ptr1 !== null) {
    ptr1.next = null;
  }
  if (ptr2 !== null) {
    ptr2.next = null;
  }
  let res = concatLists(head0.next, head1.next);
  res = concatLists(res, head2.next);
  return res;
};

const concatLists = (head1, head2) => {
  if (head1 === null || head2 === null) {
    return head1 || head2;
  }
  let cur = head1;
  while (cur.next !== null) {
    cur = cur.next;
  }
  cur.next = head2;
  return head1;
};

let node1 = new ListNode(0);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(0);
let node5 = new ListNode(1);

// 1 -> 0 -> 2 -> 1 -> 0

node2.next = node1;
node1.next = node3;
node3.next = node5;
node5.next = node4;

console.log(sortList(node2));
