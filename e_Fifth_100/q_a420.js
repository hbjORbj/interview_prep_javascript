/*
Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,

and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

var merge = function (intervals) {
  if (intervals === null || intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [];
  stack.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    let prev = stack.pop();
    let cur = intervals[i];
    if (prev[1] >= cur[0]) {
      // possible to merge
      if (prev[1] >= cur[1]) {
        // prev interval absorbs current interval
        stack.push(prev);
      } else {
        // new interval is created
        stack.push([prev[0], cur[1]]);
      }
    } else {
      // simply push prev back and push cur interval
      stack.push(prev, cur);
    }
  }
  return stack;
  // T.C: O(Nlog(N))
  // S.C: O(N)
};
/*
Consider two intervals: [x,y], [z, w]
if y >= z
    we can merge these two intervals

how do we merge two intervals?
if y >= w
    [x,y] absorbs [z,w] and hence [x,y] is the merged interval
else
    [x, w] is the merged interval
*/
