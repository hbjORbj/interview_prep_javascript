/*
Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.
*/

var treeToDoublyList = function(root) {
    let head = null, cur = null, prev = null;
    inorder(root);
    let tail = cur; // get tail
    if (tail) tail.right = head;
    if (head) head.left = tail;
    return head;
    
    function inorder(root) {
        if (!root) return;
        
        inorder(root.left);
        
        prev = cur; // update prev
        cur = root; // update cur
        if (prev) prev.right = cur; // link
        cur.left = prev;

        if (!head) head = root; // set head
        
        inorder(root.right);
    }
    // Time Complexity: O(N)
    // Space Complexity: O(H)
};

/*
For every node, we need prev node. 
We will make prev node point to cur node and make cur node point to prev node.
*/