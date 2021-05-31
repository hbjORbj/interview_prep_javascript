/*
132 Pattern

Given an array of n integers nums, a 132 pattern is a subsequence of three integers 

nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.
*/

/*
At each index i, we want to find if (1) there is a smaller element on the left 
(2) there is a smaller element on the right (3) the smaller element on the right is greater than the smaller element on the left.

Hence, for each i, pattern[i] = left[i] !== null && right[i] !== null && left[i] < right[i]

left[i] = the minimum element less than nums[i] on the left 
right[i] = the maximum element less than nums[i] on the right

if there is no element less than nums[i] on the left, left[i] = null
if there is no element less than nums[i] on the right, right[i] = null

We can fill left[] easily by keeping track of minimum value from start of array.
We will fill right[] using Stack.
*/
var find132pattern = function (nums) {
  if (nums === null || nums.length === 0) {
    return false;
  }
  let n = nums.length;
  let left = new Array(n).fill(null),
    min = Infinity;
  let right = new Array(n).fill(null);
  // fill left[]
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      left[i] = min;
    }
  }
  // fill right[]
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    let elem = null;
    // we keep a decreasing stack
    // this means that this while loop allows us to go through all numbers less than
    // current number on the right and hence we can get the maximum less number
    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      if (!elem) elem = stack.pop();
      else elem = Math.max(elem, stack.pop());
    }
    right[i] = elem;
    stack.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (left[i] !== null && right[i] !== null && left[i] < right[i]) {
      return true;
    }
  }
  return false;
  // T.C: O(N)
  // S.C: O(N)
};
