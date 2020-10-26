/*
Graph Traversal: Breadth-First-Search (BFS) Technique

Input is given as adjacency list.
*/

function bfsWithAdjList(list) {
    let visited = new Array(list.length).fill(false);
    let res = [];
    let queue = [[0]];
    while (queue.length > 0) {
        let nodes = queue.shift();
        for (let node of nodes) {
            if (visited[node] == false) {
                res.push(node);
                visited[node] = true;
                queue.push(list[node]);
            }
        }
    }
    return res;
}

const adjList = [
    [1,3],
    [0],
    [3,8],
    [0,2,4,5],
    [3,6],
    [3],
    [4,7],
    [6],
    [2]
];

console.log(bfsWithAdjList(adjList)) // => [0,1,3,4,5,2,6,8,7]