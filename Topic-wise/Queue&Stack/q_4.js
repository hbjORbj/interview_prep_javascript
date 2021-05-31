/*
Next Greater Element II

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number.

If it doesn't exist, return -1 for this number.
*/

/*
We are looking for the first number greater than current number. It doesn't matter if the
position of Next Greater Number (NGN) is before or after position of current number because
the array is circular.

We will use a Stack. We start iterating given array from the start.
At each number, we check if stack has a number smaller than current number. If so,
current number is the Next Greater Number for that element in the stack. Hence,
we keep popping smaller elements from stack and be their NGN. 

Then, we push current number into stack so that we can find our NGN (or not if there isn't one).

We will push index instead of number into stack so that we can fill our result array.

Also, we will iterate through the array twice so that for every number we can scan elements on both the left side and the right side.
*/

var nextGreaterElements = function (nums) {
  let res = new Array(nums.length).fill(-1);
  let stack = [];
  for (let i = 0; i < nums.length * 2; i++) {
    let j = i % nums.length;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[j]) {
      // current element is NGN for popped element
      res[stack.pop()] = nums[j];
    }
    stack.push(j);
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
