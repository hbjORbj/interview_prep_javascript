/*
Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

Your code will only be given the head of the original linked list.
*/

/*
1. As we iterate through the given list, create copy nodes with the same value and next pointer. For each node, record it to hash table with current index as key. (We increment index by 1). Don't worry about random pointer now.
2. After copying til the end of list, we re-iterate through the new list and set random pointers. How do we know what random pointers to set? We turn random pointers of original list into indices and use them.
*/
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  // Initialise pointers
  let oldCur = head;
  let dummyHead = new Node();
  let cur = dummyHead,
    prev = null;

  let m = new Map(),
    idx = 0;
  while (oldCur !== null) {
    let newNode = new Node(oldCur.val, null, null);
    m.set(idx, newNode); // record new node at current index
    cur.next = newNode; // append new node to new list
    cur = cur.next; // advance new list pointer
    if (prev) prev.next = cur;
    prev = cur; // advance prev pointer

    oldCur = oldCur.next; // advance original list pointer
    idx += 1;
  }

  // Re-initialise pointer of given list and new list
  oldCur = head;
  cur = dummyHead.next;
  idx = 0;
  let randomIndices = randomPointers(head);

  while (oldCur !== null) {
    let randomIdx = randomIndices[idx++];
    if (randomIdx !== null) {
      cur.random = m.get(randomIdx);
    }
    cur = cur.next; // advance new list pointer
    oldCur = oldCur.next; // advance original list pointer
  }
  return dummyHead.next;
  // T.C: O(N)
  // S.C: O(N)
};

const randomPointers = (head) => {
  // Fill a Hash Table with entry being (node, index)
  let m = new Map();
  let cur = head,
    idx = 0;
  while (cur !== null) {
    m.set(cur, idx);
    cur = cur.next;
    idx++;
  }

  // Re-initialise pointer and index
  (cur = head), (idx = 0);
  let randomIndices = new Array(idx); // stores index of random node of each node

  while (cur !== null) {
    randomIndices[idx++] = cur.random !== null ? m.get(cur.random) : null;
    cur = cur.next;
  }
  return randomIndices;
};
