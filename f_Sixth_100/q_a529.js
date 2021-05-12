/*
Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).

n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).

Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

var maxArea = function (height) {
  let low = 0,
    high = height.length - 1;
  let maxArea = 0;
  while (low < high) {
    let width = high - low;
    let area = width * Math.min(height[low], height[high]);
    maxArea = Math.max(maxArea, area);

    if (height[low] > height[high]) {
      high--;
    } else {
      low++;
    }
  }
  return maxArea;
  // T.C: O(N)
  // S.C: O(1)
};
