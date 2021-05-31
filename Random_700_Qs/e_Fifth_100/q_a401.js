/*
Print Graph in Level Order: Given a graph and a node N, print the Graph in order of distance from N.

Each level should be in a new line.
*/

const printLevels = (graph, N) => {
  let visited = new Set();
  let queue = [[N]];
  let res = [];
  while (queue.length > 0) {
    let nodes = queue.shift();
    res.push(nodes);
    let level = [];
    for (let node of nodes) {
      visited.add(node);
      let neighbours = graph[node];
      for (let neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          level.push(neighbour);
        }
      }
    }
    if (level.length > 0) {
      queue.push(level);
    }
  }
  return res;
  // T.C: O(V + E)
  // S.C: O(V)
};

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

console.log(printLevels(adjList, 0)); // => [ [ 1, 3 ], [ 2, 4, 5 ], [ 8, 6 ], [ 7 ] ]
console.log(printLevels(adjList, 3)); // => [ [ 0, 2, 4, 5 ], [ 1, 8, 6 ], [ 7 ] ]
