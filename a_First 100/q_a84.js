/*
Graph Traversal: Depth-First-Search (BFS) Technique

Input is given as adjacency matrix.
*/

function dfsWithAdjMatrix(matrix) {
    let visited = new Array(matrix.length).fill(false);
    let res = [];
    function dfs(visited, cur) {
        if (visited[cur] == false) {
            res.push(cur);
            visited[cur] = true;
            for (let i = 0; i < matrix[cur].length; i++) {
                if (matrix[cur][i] == 1) {
                    dfs(visited, i);
                }
            }
        }
    }
    dfs(visited, 0);
    return res;
}

const adjMatrix = [
    [0,1,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,0,0,0],
    [0,0,0,1,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0],
    [0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0]
];

console.log(dfsWithAdjMatrix(adjMatrix));
