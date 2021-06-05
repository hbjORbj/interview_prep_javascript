/*
Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
*/

var cloneGraph = function (node, cloneMap = new Map()) {
  if (!node) {
    return null;
  }
  if (cloneMap.has(node)) {
    return cloneMap.get(node);
  }
  let cloneNode = new Node(node.val, []);
  cloneMap.set(node, cloneNode);
  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor, cloneMap));
  }
  return cloneNode;
  // T.C: O(V+E), we visit every vertex and every edge
  // S.C: O(V), cloneMap has a space complexity of O(V)
};
