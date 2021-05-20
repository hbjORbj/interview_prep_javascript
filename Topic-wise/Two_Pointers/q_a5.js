/*
Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

/*
First solution

Water trapped on a block = (Water Level - Block Height) * Width
Water Level = Min(max height of left boundary, max height of right boundry)
*/
var trap = function (height) {
  if (height === null || height.length === 0) {
    return 0;
  }
  // leftMax[i] is the max height of block in height[0...i]
  let leftMax = new Array(height.length);
  // rightMax[i] is the max height of block in height[i...end]
  let rightMax = new Array(height.length);
  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let trapped = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let waterLevel = Math.min(leftMax[i - 1], rightMax[i + 1]);
    // water level should be higher than block height for water to be trapped
    if (waterLevel > height[i]) {
      trapped += waterLevel - height[i];
    }
  }
  return trapped;
  // T.C: O(N)
  // S.C: O(N)
};

var trap = function (height) {
  if (height === null || height.length === 0) {
    return 0;
  }
  let leftMax = 0,
    rightMax = 0;
  let low = 0,
    high = height.length - 1,
    trapped = 0;
  while (low <= high) {
    // leftMax is the water level because we know
    // there is a higher boundary on the right
    if (height[low] < height[high]) {
      if (leftMax > height[low]) {
        trapped += leftMax - height[low];
      } else {
        leftMax = height[low];
      }
      low++;
    }
    // rightMax is the water level because we know
    // there is a higher boundary on the left
    else {
      if (rightMax > height[high]) {
        trapped += rightMax - height[high];
      } else {
        rightMax = height[high];
      }
      high--;
    }
  }
  return trapped;
  // T.C: O(N)
  // S.C: O(1)
};
