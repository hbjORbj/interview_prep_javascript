/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 

compute how much water it can trap after raining.

Qs:
1. Should I consider the left and right sides of the graph as walls?
- No.
2. Can there be negative integers?
- No.
*/

var trap = function(heights) {
    let count = 0, addition = true;
    while (addition == true) {
        addition = false;
        for (let i = 1; i < heights.length-1; i++) {
            let left = heights[i-1];
            let right = heights[i+1];
            if (left > heights[i] && heights[i] <= right) {
                let start = i;
                while (i < heights.length-1 && heights[i] == heights[i+1]) {
                    i++;
                }
                if (heights[i+1] > heights[i]) {
                    count += (i-start+1) * 
                        Math.min(left-heights[i], heights[i+1]-heights[i]);
                    for (let j = start; j <= i; j++) {
                        heights[j] = Math.min(left, heights[i+1]);
                    }
                    addition = true;
                }
            }
        }
    }

    return count;
};

/*

Test Cases:

Idea:

Time Complexity:
Space Complexity:
*/