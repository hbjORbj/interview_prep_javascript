/*
Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
*/

var splitListToParts = function(root, k) {
    let len = getLength(root);
    let res = [];
    while (k > 0) {
        let numOfElems = Math.ceil(len / k);
        createSubList(numOfElems);
        len -= numOfElems;
        k--;    
    }
    return res;
    // Time Complexity: O(N + k), we always visit every node but might iterate for more than N when k is greater than N
    // Space Complexity: O(k), extra space of empty lists added, e.g. [], 3 => [[], [], []]
    
    function createSubList(n) {
        let prev = null, cur = root;
        for (let i = 0; i < n; i++) {
            prev = cur;
            cur = cur.next;
        }
        if (prev) prev.next = null;
        res.push(root);
        root = cur;
    }
};

function getLength(head) {
    let len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
}