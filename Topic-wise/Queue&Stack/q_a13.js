/*
Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.

You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

/*
We need to maintain two orders:
1. Increasing order of indices
2. Decreasing order of values

Since we should maintain two different orders, we will use a deque.
1. Deque should only contain the elements in the current window (index less than start of
current window all get popped).
2. Deque should contain elements in descending order so that the front element is always
the maximum value of the current window. Hence, we pop elements from the end if it is less
than current element. Last element of deque should be greater than or equal to current element 
to maintain the descending order.

We will process the first k elements separately to initialise a deque.
*/
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let max = new Array(nums.length - k + 1);
  for (let i = 0; i < k; i++) {
    validateDeque(deque, nums, 0, nums[i]);
    deque.push(i);
  }
  max[0] = nums[deque[0]];
  // we start sliding window (expanding right pointer and shirinking left pointer)
  for (let i = k; i < nums.length; i++) {
    let start = i - k + 1;
    validateDeque(deque, nums, start, nums[i]);
    deque.push(i);
    max[start] = nums[deque[0]];
  }
  return max;
  // T.C: O(N), every element is pushed once and popped once
  // S.C: O(N)
};

function validateDeque(deque, nums, start, curVal) {
  while (deque.length > 0 && deque[0] < start) {
    deque.shift();
  }
  while (deque.length > 0 && nums[deque[deque.length - 1]] < curVal) {
    deque.pop();
  }
}
