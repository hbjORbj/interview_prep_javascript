/*
Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,

return the area of the largest rectangle in the histogram.
*/

/*
At each bar, we want to get the possible largest rectangle that includes the current bar.
We should find the number of bars between current bar and bar smaller than current bar 
on the left (x) and between the current bar and bar smaller than current bar on the right (y), respectively. x + y + 1 represents the width of the largest rectangle at current bar.

Hence, we need two arrays: (Previous Less Element) PLE[] and (Next Less Element) NLE[].
We will fill these two arrays using Stack, respectively. Then, we will iterate through
given bars. At each bar i, we will compute width = (i - PLE[i] - 1) + (NLE[i] - i - 1) + 1
and multiply it by current bar's height to get the largest possible area including current
bar. We will update maximum area when necessary.
*/
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let PLE = new Array(heights.length).fill(-1);
  let NLE = new Array(heights.length).fill(-1);
  findPLE(PLE, heights);
  findNLE(NLE, heights);
  for (let i = 0; i < heights.length; i++) {
    // if PLE doesn't exist, all bars up to index 0 are part of current rectangle
    let barsOnLeft = PLE[i] === -1 ? i : i - PLE[i] - 1;
    // if NLE doesn't exist, all bars up to last index are part of current rectangle
    let barsOnRight = NLE[i] === -1 ? heights.length - 1 - i : NLE[i] - i - 1;
    let width = barsOnLeft + barsOnRight + 1;
    maxArea = Math.max(maxArea, width * heights[i]);
  }
  return maxArea;
  // T.C: O(N)
  // S.C: O(N)
};

function findPLE(PLE, heights) {
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      // pop until stack's last element is less than current element
      stack.pop();
    }
    if (stack.length > 0) {
      PLE[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
}

function findNLE(NLE, heights) {
  let stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      // pop until stack's last element is less than current element
      stack.pop();
    }
    if (stack.length > 0) {
      NLE[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
}
