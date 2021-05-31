/*
Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.

You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that 

you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/

/*
Topological Sorting (Kahn's Algorithm)

1. Fill an array inDegree[], where inDegree[i] is the number of incoming edges to node i;
i represents a course and incoming edges represent the pre-requisites.
2. Fill an adjacency list.
3. Use queue to traverse nodes in topological order.
    - start with nodes that have 0 in-degree as it means they have no dependency
    - when visiting a node, delete outgoing edges from the node; if this causes other nodes
    to have 0 in-degree, push those nodes into queue
    - repeat this until queue is empty
4. if the total number of visited nodes in topological order is equal to n, return true;
otherwise, return false. This is because, if there is no cycle in the graph, we should be able to
traverse all nodes in topological order.
*/
var canFinish = function (numCourses, prerequisites) {
  // Fill an adjacency list and inDegree array
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);
  for (let [course, preCourse] of prerequisites) {
    inDegree[course]++;
    adjList[preCourse].push(course);
  }
  // find nodes with 0 in-degree and push them to queue
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  // traverse nodes in topological order until queue is empty
  // and count the number of nodes traversed
  let count = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    count++;
    for (let v of adjList[node]) {
      inDegree[v] -= 1;
      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }
  return count == numCourses;
  // T.C: O(V+E), we visit every node and every neighbour of the node
  // S.C: O(V+E), for adjacency list
};
