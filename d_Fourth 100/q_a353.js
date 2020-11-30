/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 

n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 

Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};