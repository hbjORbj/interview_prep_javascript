/*
Graph Traversal: Breadth-First-Search (BFS) Technique

Input is given as adjacency matrix.
*/

function bfsWithAdjMatrix(matrix) {
    let queue = [0];
    let visited = new Array(matrix.length).fill(false);
    let res = [];
    while (queue.length > 0) {
        let node = queue.shift();
        if (visited[node] == false) {
            res.push(node);
            visited[node] = true;
            for (let i = 0; i < matrix[node].length; i++) {
                if (matrix[node][i] == 1) queue.push(i);
            }
        }
    }
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

console.log(bfsWithAdjMatrix(adjMatrix));
