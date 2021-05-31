/*
Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node.

Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes.

Each node is represented as a pair of [val, random_index] where:
- val: an integer representing Node.val
- random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

Your code will only be given the head of the original linked list.
*/

/*
[Recursion, Memoization]
1. Consider every node as a list.
2. Record each original node to hash table with its value being a clone node.
3. Copy next node and random node.
4. Return node.
*/
var copyRandomList = function (head, cloneMap = new Map()) {
  if (!head) {
    return null;
  }
  if (cloneMap.has(head)) {
    return cloneMap.get(head);
  }
  let clone = new Node(head.val, null, null);
  cloneMap.set(head, clone);
  clone.next = copyRandomList(head.next, cloneMap);
  clone.random = copyRandomList(head.random, cloneMap);
  return clone;
  // T.C: O(N)
  // S.C: O(N)
};

/*
1. Iterate through given list. For each node, create a clone and record it to a hash table with an entry being
(node, clone node). Then, push the original node to an array.
2. Iterate through the array. For each node, get the clone node and
(1) Set next pointer to next node's clone
(2) Set random pointer to current node's random node's clone
3. Return the cloned head from hash table.
*/
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let cloneMap = new Map(),
    arr = [];
  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    let cloneNode = new Node(cur.val, null, null);
    cloneMap.set(cur, cloneNode);
    cur = cur.next;
  }

  for (let i = 0; i < arr.length; i++) {
    let clone = cloneMap.get(arr[i]);
    // set next pointer
    if (i < arr.length - 1) {
      clone.next = cloneMap.get(arr[i + 1]);
    }
    // set random pointer
    if (arr[i].random !== null) {
      clone.random = cloneMap.get(arr[i].random);
    }
  }
  return cloneMap.get(head);
  // T.C: O(N)
  // S.C: O(N)
};
