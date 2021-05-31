/*
Given an array of intervals where intervals[i] = [start-i, end-i], merge all overlapping intervals, and 

return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    let stack = [intervals[0]]; // stack stores merged intervals so far
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop(), cur = intervals[i];
        if (prev[1] >= cur[0]) {
            stack.push([prev[0], Math.max(prev[1], cur[1])]);
        } else {
            stack.push(prev, cur);
        }
    }
    return stack;
    // Time Complexity: O(N*log(N))
    // Space Complexity: O(N)
};

/*
There are two cases:
1. After merging, the interval expands.
[1,3], [2,4] => [1, 4]
2. After merging, the interval stays the same.
[1,3], [2,3] => [1,3]
So, when we merge, for end value, we need to compute max(end of 1st arr, end of 2nd arr)
*/