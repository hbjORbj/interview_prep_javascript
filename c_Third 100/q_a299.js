/*
Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. 

For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. 

After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. 

You should return the pointer to the smallest element of the linked list.
*/

var treeToDoublyList = function(root) {
    let head = null, cur = null, prev = null;
    inorder(root);
    if (head) head.left = cur;
    if (cur) cur.right = head;
    return head;
    
    function inorder(root) {
        if (!root) return;
        inorder(root.left);

        if (head == null) { // initialise head
            head = root;
        }

        prev = cur;
        cur = root;
        cur.left = prev;
        if (prev) prev.right = cur;
        
        inorder(root.right);
    }
    // Idea: we perform an in-order traversal and visit all nodes
    // we keep track of previous node so that we can connect current node with previous node 
    // Time Complexity: O(N), we visit all nodes exactly once
    // Space Complexity: O(N), call stack can go as deep as N
};