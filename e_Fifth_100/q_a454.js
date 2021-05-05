/*
Insert into a Sorted Circular Linked List

Given a node from a Circular Linked List which is sorted in ascending order,

write a function to insert a value insertVal into the list such that it remains a sorted circular list.

The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the circular list.

If there are multiple suitable places for insertion, you may choose any place to insert the new value.

After the insertion, the circular list should remain sorted.

If the list is empty (i.e., given node is null), you should create a new single circular list and return the reference to that single node.

Otherwise, you should return the original given node.
*/

var insert = function (head, insertVal) {
  let newNode = new Node(insertVal);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
  let cur = head;
  let cycle = 0;
  while (true) {
    let next = cur.next;
    // 1st case: Between two nodes in general
    // 2nd case: Between Max node and Min node
    // 3rd case: every node is the same
    if (
      (cur.val <= insertVal && next.val >= insertVal) ||
      isNodeBetweenMaxAndMin(cur.val, next.val, insertVal) ||
      cycle > 0
    ) {
      cur.next = newNode;
      newNode.next = next;
      break;
    }
    cur = cur.next;
    // We've revolved a full cycle (every node is the same)
    if (cur === head) {
      cycle++;
    }
  }
  return head;
  // T.C: O(N)
  // S.C: O(1)
};

const isNodeBetweenMaxAndMin = (curVal, nextVal, insertVal) => {
  return nextVal < curVal && (curVal < insertVal || nextVal > insertVal);
  // 1st case: Node is new max
  // 2nd case: Node is new min
};
