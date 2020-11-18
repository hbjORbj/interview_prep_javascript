/*
Given an array arr of positive integers, consider all binary trees such that:

-Each node has either 0 or 2 children;
- The values of arr correspond to the values of each leaf in an in-order traversal of the tree. (Recall that a node is a leaf if and only if it has 0 children.)
- The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.

Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.
*/

var findCircleNum = function(M) {
    let circles = 0;
    let visited = new Array(M.length).fill(false);
    for (let row = 0; row < M.length; row++) {
        if (visited[row] == false) {
            dfs(row, M, visited);
            circles++;
        }
    }
    return circles;
    // Time Complexity: O(N^2), we visit every node once
    // Space Complexity: O(N)
};

function dfs(vertex, M, visited) {
    visited[vertex] = true;
    let connections = M[vertex];
    for (let next = 0; next < connections.length; next++) {
        if (M[vertex][next] == 1 && visited[next] == false) { // there is an edge from current vertex to next vertex
            dfs(next, M, visited);
        }
    }
}
// Idea: Every time we encounter 1, we need to find the connected component starting from this node.