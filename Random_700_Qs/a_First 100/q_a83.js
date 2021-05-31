/*
Graph Traversal: Depth-First-Search (DFS) Technique

Input is given as adjacency list.
*/

function dfsWithAdjList(list) {
  let visited = new Array(list.length).fill(false);
  let res = [];
  function dfs(visited, cur) {
    res.push(cur);
    visited[cur] = true;
    let neighbours = list[cur];
    for (let neighbour of neighbours) {
      if (visited[neighbour] === false) {
        dfs(visited, neighbour);
      }
    }
  }
  dfs(visited, 0);
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

console.log(dfsWithAdjList(adjList)); // => [0, 1, 3, 2, 8, 4, 6, 7, 5]
