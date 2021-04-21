/*
Graph Traversal: Breadth-First-Search (BFS) Technique

Input is given as adjacency list.
*/

function bfsWithAdjList(list) {
  let visited = new Array(list.length).fill(false);
  let queue = [0];
  let res = [];
  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node);
    visited[node] = true;
    let neighbours = list[node];
    for (let neighbour of neighbours) {
      if (visited[neighbour] === false) {
        queue.push(neighbour);
      }
    }
  }
  return res;
}

const adjList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

console.log(bfsWithAdjList(adjList)); // => [0,1,3,2,4,5,8,6,7]
