/*
K Closest Points to Origin

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

var kClosest = function (points, k) {
  let sorted = points.map((p, idx) => {
    let dist = (p[0] ** 2 + p[1] ** 2) ** 0.5;
    return [dist, idx];
  });
  sorted.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (let i = 0; i < k; i++) {
    let idx = sorted[i][1];
    res.push(points[idx]);
  }
  return res;
  // T.C: O(nlog(n))
  // S.C: O(n)
};
