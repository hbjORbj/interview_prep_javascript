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
Brute Force

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

var trap = function(heights) {
    let trapped = 0, size = heights.length;
    let leftMax = new Array(size);
    let rightMax = new Array(size);
    leftMax[0] = heights[0];
    rightMax[size-1] = heights[size-1];
    for (let i = 1; i < size; i++) {
        leftMax[i] = Math.max(leftMax[i-1], heights[i]);
    }
    for (let i = size-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], heights[i]);
    }
    for (let i = 0; i < size; i++) {
        let water = Math.min(leftMax[i], rightMax[i]) - heights[i];
        if (water > 0) trapped += water;
    }
    return trapped;
    
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // DP
}