/*
Given a linked list L, separate it into two linked lists. One contains L's odd nodes and the other contains
L's even nodes.

Note: Odd and Even refer to the node's position, not value.

Qs: 
Is the first index considered odd position or even position?
- Odd
How do you want the output?
- Return a pair of the linked lists.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const separateLists = (L) => {
  let oddHead = new ListNode();
  let evenHead = new ListNode();
  let oddCur = oddHead,
    evenCur = evenHead;
  let cur = L,
    idx = 1;
  while (cur !== null) {
    if (idx % 2 === 1) {
      oddCur.next = cur;
      oddCur = oddCur.next;
    } else {
      evenCur.next = cur;
      evenCur = evenCur.next;
    }
    cur = cur.next;
    idx++;
  }
  // Set tails to null
  oddCur.next = null;
  evenCur.next = null;
  return [oddHead.next, evenHead.next];
};

let node1 = new ListNode(9);
let node2 = new ListNode(3);
let node3 = new ListNode(10);
let node4 = new ListNode(5);
let node5 = new ListNode(7);

// Odd List: 9 -> 10 -> 7 -> null
// Even List: 3 -> 5 -> null

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
const [oddList, evenList] = separateLists(node1);
console.log(oddList);
console.log(evenList);
