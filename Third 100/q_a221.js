/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 

find the area of largest rectangle in the histogram.
*/

var largestRectangleArea = function(heights) {
    let pStack = [], hStack = [], area = 0;
    for (let i = 0; i < heights.length; i++) {
        let cur = heights[i];
        while (hStack[hStack.length-1] > cur) {
            let pos = pStack.pop(); 
            let height = hStack.pop();
            let temp = height * (i - pos);
            area = Math.max(area, temp);
            if (hStack.length == 0 || hStack[hStack.length-1] <= cur) {
                pStack.push(pos);
                hStack.push(cur);
            }
        }
        if (i == 0 || hStack[hStack.length-1] < cur) {
            pStack.push(i);
            hStack.push(cur);
        }
    }
    
    while (hStack.length > 0 && pStack.length > 0) {
        let width = heights.length - pStack.pop();
        let temp = width * hStack.pop();
        area = Math.max(area, temp);
    }
    return area;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};