/*
Given a directed graph, find if there is a cycle.
*/

const detectCycle = (graph) => {
  let adjList = new Map();
  let visited = new Map(),
    visiting = new Map();
  for (let [from, to] of graph) {
    visited.set(from, false);
    visited.set(to, false);
    visiting.set(from, false);
    visiting.set(to, false);
    adjList.set(from, []);
    adjList.set(to, []);
  }
  for (let [from, to] of graph) {
    adjList.get(from).push(to);
  }
  for (let node of adjList.keys()) {
    if (hasCycle(adjList, node, visited, visiting)) {
      return true;
    }
  }
  return false;
  // T.C: O(V * ( V + E ))
  // S.C: O(V + E)
};

const hasCycle = (adjList, node, visited, visiting) => {
  if (visited.get(node)) {
    return false;
  }
  visiting.set(node, true);
  let neighbours = adjList.get(course);
  for (let i = 0; i < neighbours.length; i++) {
    if (visiting.get(neighbours[i])) {
      return true;
    }
    if (hasCycle(adjList, neighbours[i], visited, visiting)) {
      return true;
    }
  }
  visiting.set(node, false);
  visited.set(node, true);
  return false;
};
