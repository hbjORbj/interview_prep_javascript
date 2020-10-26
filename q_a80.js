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

// Brute Force

// Time Complexity: O(n^2)
// Space Complexity: O(1)

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
    for (let i = 1; i < size-1; i++) {
        trapped += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    return trapped;
    
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // DP
}

var trap = function(heights) {
    let trapped = 0, low = 0, high = heights.length-1;
    let leftMax = 0, rightMax = 0;
    while (low < high) {
        if (heights[low] <= heights[high]) { 
            // we know that there is wall in the right that is either equal to
            // or higher than our tallest wall in the left
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (leftMax > heights[low]) trapped += leftMax - heights[low];
            else leftMax = heights[low];
            low++;
        } else {
            // we know that there is wall in the left that is either equal to
            // or higher than our tallest wall in the right
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (rightMax > heights[high]) trapped += rightMax - heights[high];
            else rightMax = heights[high];
            high--;
        }
    }
    return trapped;
    // Two Pointer
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}