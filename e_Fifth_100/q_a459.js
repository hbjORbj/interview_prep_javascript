/*
Interval List Intersections

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj].

Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
*/
var intervalIntersection = function (firstList, secondList) {
  let i = 0,
    j = 0;
  let res = [];
  while (i < firstList.length && j < secondList.length) {
    let firstInterval = firstList[i];
    let secondInterval = secondList[j];
    let intersected = false;
    // Second interval is more advanced
    if (firstInterval[1] < secondInterval[1]) {
      // The following don't intersect
      // [1,5]
      // [7,10]
      // while the following does intersect
      // [1,5]
      // [4,10]
      if (firstInterval[1] >= secondInterval[0]) {
        intersected = true;
      }
      i++;
    }
    // First interval is more advanced
    else {
      // The following don't intersect
      // [7,10]
      // [1,5]
      // while the following does intersect
      // [4,10]
      // [1,5]
      if (secondInterval[1] >= firstInterval[0]) {
        intersected = true;
      }
      j++;
    }
    if (intersected) {
      let newInterval = [
        Math.max(firstInterval[0], secondInterval[0]),
        Math.min(firstInterval[1], secondInterval[1]),
      ];
      res.push(newInterval);
    }
  }
  return res;
  // T.C: O(N), where N = # of all intervals
  // S.C: O(N)
};
