/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  let distances = new Array(N).fill(Infinity);
  distances[K-1] = 0;
  
  for (let i = 0; i < N-1; i++) {
      let cost = 0;
      for (let edge of times) {
          let source = edge[0], target = edge[1], weight = edge[2];
          let newDistance = distances[source-1] + weight;
          if (newDistance < distances[target-1]) {
              distances[target-1] = newDistance;
              cost++;
          }
      }
      if (cost === 0) break; // already found all shortest distances to every vertex
  }
  let res = Math.max(...distances);
  return res === Infinity ? -1 : res;
}
// Bellman-Ford's algorithm
// Time Complexity: O(N*E) where E can be N^2 in the worst case
// Space Complexity: O(N)


/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  // Converting data into adjacency list
  let adjList = new Array(N).fill(0).map(() => []);
  for (let edge of times) {
      adjList[edge[0]-1].push([edge[1]-1,edge[2]]);
  }
  
  let travelTime = new Array(N).fill(Infinity);
  travelTime[K-1] = 0;
  let heap = new PriorityQueue((a,b) => travelTime[a-1] < travelTime[b-1]);
  heap.push(K-1);
  
  while (!heap.isEmpty()) {
      let curV = heap.pop();
      for (let pair of adjList[curV]) {
          let nextV = pair[0], weight = pair[1];
          let tempTime = travelTime[curV] + weight;
          if (travelTime[nextV] > tempTime) {
              travelTime[nextV] = tempTime;
              heap.push(nextV);
              // costs to vertices connected to this nextV might change
              // if cost to this nextV changed
              // but if cost to this nextV didn't change, there is no need to push
              // this vertex to heap again
          }
      }
  }
  
  // travelTime[v] represents the lowest-cost path from K to v vertex 
  // Find the highest cost to reach a vertex because at this cost
  // K must have visited all other vertices already
  let totalTime = Math.max(...travelTime);
  return totalTime === Infinity ? -1 : totalTime;
};

// Dijkstra's algorithm
// Time Complexity: O(N + ELog(E)) where E can be N^2 in the worst case
// Space Complexity: O(N + E)

// Priority Queue implementation
class PriorityQueue {
constructor(comparator = (a, b) => a > b) {
  this._heap = [];
  this._comparator = comparator;
}

size() {
  return this._heap.length;
}

peek() {
  return this._heap[0];
}

isEmpty() {
  return this._heap.length === 0;
}

_parent(idx) {
  return Math.floor((idx - 1) / 2);
}

_leftChild(idx) {
  return idx * 2 + 1;
}

_rightChild(idx) {
  return idx * 2 + 2;
}

_swap(i, j) {
  [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
}

_compare(i, j) {
  return this._comparator(this._heap[i], this._heap[j]);
}

push(value) {
  this._heap.push(value);
  this._siftUp();

  return this.size();
}

_siftUp() {
  let nodeIdx = this.size() - 1;

  while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
    this._swap(nodeIdx, this._parent(nodeIdx));
    nodeIdx = this._parent(nodeIdx);
  }
}

pop() {
  if (this.size() > 1) {
    this._swap(0, this.size() - 1);
  }

  const poppedValue = this._heap.pop();
  this._siftDown();
  return poppedValue;
}

_siftDown() {
  let nodeIdx = 0;

  while (
    (this._leftChild(nodeIdx) < this.size() &&
      this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
    (this._rightChild(nodeIdx) < this.size() &&
      this._compare(this._rightChild(nodeIdx), nodeIdx))
  ) {
    const greaterChildIdx =
      this._rightChild(nodeIdx) < this.size() &&
      this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
        ? this._rightChild(nodeIdx)
        : this._leftChild(nodeIdx);

    this._swap(greaterChildIdx, nodeIdx);
    nodeIdx = greaterChildIdx;
  }
}
}