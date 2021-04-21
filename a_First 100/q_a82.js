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
    visited[node] = true;
    res.push(node);
    for (let i = 0; i < matrix[node].length; i++) {
      if (!visited[i] && matrix[node][i] === 1) { // meaning that i is a neighbour and not visited yet
          queue.push(i);
      }
    }
  }
  return res;
}

const adjMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

console.log(bfsWithAdjMatrix(adjMatrix));
