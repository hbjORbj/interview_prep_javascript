// Given a collection of intervals, merge all overlapping intervals.

var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let cur = intervals[i];
        if (prev[1] >= cur[0]) {
            stack.push( [prev[0], Math.max(prev[1], cur[1])] );
        } else {
            stack.push(prev, cur);
        }
    }
    
    return stack;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)
};

// (1) [[1,3], [2,6]] => [[1,6]]
// (2) [[1,4],[2,3]] => [[1,4]]
// Two possible cases to perform merger:
// 1st case: we merge two arrays and obtain a bigger interval
// 2nd case: one array absorbs another array and the size doesn't change.
// Therefore, to cover both cases, when we merge two arrays, we perform the following:
// [start of first arr, max(end of first arr, end of second arr)]