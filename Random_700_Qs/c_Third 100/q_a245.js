/*
We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, second node value of 1, and third node value of 5.
*/

// With converting linked list into array
var nextLargerNodes = function(head) {
    // Convert linked list into array
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    
    let stack = [], res = []; // stack stores numbers who are looking for greater numbers in its right
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length-1][0] < arr[i]) {
            let idx = stack.pop()[1];
            res[idx] = arr[i];
        }
        stack.push([arr[i], i]);
    }
    while (stack.length > 0) { // for remaining numbers in stack, there is no greater number in its right
        res[stack.pop()[1]] = 0;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

// Without converting linked list into array
var nextLargerNodes = function(head) {
    let stack = [], res = [], i = 0;
    while (head !== null) {
        while (stack.length > 0 && stack[stack.length-1][0] < head.val) {
            let idx = stack.pop()[1];
            res[idx] = head.val;
        }
        stack.push([head.val, i]);
        i++;
        head = head.next;
    }
    while (stack.length > 0) {
        res[stack.pop()[1]] = 0;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}