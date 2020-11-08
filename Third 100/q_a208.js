/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
*/

var numTrees = function(n) {
    let bst = new Array(n+1).fill(0);
    bst[0] = 1;
    bst[1] = 1;
    
    // bst[i] represents the # of BSTs with i nodes from 1...i
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            bst[i] += bst[j-1] * bst[i-j];
        }
    }
    return bst[n];
    
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)
};

/*
the # of BSTs with n nodes from 1...n are
the # of BSTs with n nodes when 1 is the root +
the # of BSTs with n nodes when 2 is the root +
......
the # of BSTs with n nodes when n is the root.

Hence, given i nodes, we compute the # of BSTs when j (root) is 1,...,i.
the # of BSTs on the left is bst[j -1] and
the # of BSTs on the right is bst[i - j].
We multiply them to get the # of BSTs when we have i nodes 
and j is the root.
*/