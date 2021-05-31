/*
Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. 

Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. 

None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.
*/

/*
[Recursion, Memoization]

Solution

Use recursion to copy list:

At copying of each list, we will create a new node with the same value as original's and
in order to set its next and random pointers we will need to copy lists for these, respectively, as follows:
cur.next = copyList(headToCopy.next)
cur.random = copyList(headToCopy.random)

We will use memoization for more optimised solution:

We create a Hash table with each entry being (original node, deep-copied node)
and pass this as parameter to copy function
*/

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let memo = new Map();
  return copyList(head, memo);
  // T.C: O(N)
  // S.C: O(N)
};

const copyList = (headToCopy, memo) => {
  if (!headToCopy) {
    return null;
  }
  if (memo.has(headToCopy)) {
    return memo.get(headToCopy);
  }
  let newNode = new Node(headToCopy.val, null, null);
  memo.set(headToCopy, newNode);
  newNode.next = copyList(headToCopy.next, memo);
  newNode.random = copyList(headToCopy.random, memo);
  return newNode;
};
