/*
There are N students in a class. Some of them are friends, while some are not. 

Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. 

And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. 

If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. 

And you have to output the total number of friend circles among all the students.
*/

// Idea: Every time we encounter 1, we need to find the connected component starting from this node. 
// Why? 1 means that this person is a direct friend of mine. 
// Now we want to visit all of his friends, all of his friends' friends and so on because all these people are my indirect friends and we together make one circle.

var findCircleNum = function(M) {
    if (M.length == 0 || M[0].length == 0) return 0;
    let circles = 0;
    let visited = new Array(M.length).fill(false); // to check whether we've already visited a vertex
    for (let vertex = 0; vertex < M.length; vertex++) {
        if (!visited[vertex]) {
            bfs(vertex, M, visited);
            circles++;
        }
    }
    return circles;
    // Time Complexity: O(N^2), we scan through every node once
    // Space Complexity: O(N), for "visited" array
};

function bfs(vertex, grid, visited) {
    let queue = [vertex];
    while (queue.length > 0) {
        let from = queue.shift();
        visited[from] = true;
        for (let to = 0; to < grid[from].length; to++) {
            if (grid[from][to] == 1 && !visited[to]) {
                queue.push(to);
            }
        }
    }
};
/****************************************************************************************************************/

var findCircleNum = function(M) {
    if (M.length == 0 || M[0].length == 0) return 0;
    let circles = 0;
    let visited = new Array(M.length).fill(false);
    for (let vertex = 0; vertex < M.length; vertex++) {
        if (!visited[vertex]) {
            dfs(vertex, M, visited);
            circles++;
        }
    }
    return circles;
    // Time Complexity: O(N^2), we visit every node once
    // Space Complexity: O(N), for "visited" array
};

function dfs(vertex, grid, visited) {
    visited[vertex] = true;
    
    for (let to = 0; to < grid[vertex].length; to++) {
        if (grid[vertex][to] == 1 && !visited[to]) {
            dfs(to, grid, visited);
        }
    }
}
