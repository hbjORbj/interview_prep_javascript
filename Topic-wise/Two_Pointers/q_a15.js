/*
Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

var maxSlidingWindow = function (nums, k) {
  if (k > nums.length) {
    return [];
  }
  let deque = [],
    res = [];
  for (let i = 0; i < k; i++) {
    cleanDeque(deque, nums, 0, i);
    deque.push(i);
  }
  res.push(nums[deque[0]]);
  for (let end = k; end < nums.length; end++) {
    // (1) ensure that deque only contains elements in the current window
    // (2) ensure that all elements smaller than current value are removed
    // from deque so that we can keep deque elements in descending order
    let start = end - k + 1;
    cleanDeque(deque, nums, start, end);
    deque.push(end);
    res.push(nums[deque[0]]);
  }
  return res;
  // T.C: O(N), each element is processed twice in the worst case: added to deque and removed from deque
  // S.C: O(N), O(N-k+1) for output array and O(k) for a deque
  // Why N-k+1 elements in the result array? Imagine you start at k-1 and advance by 1
  // up to N. This gives you N-k+1 subarrays.
};

const cleanDeque = (deque, nums, start, end) => {
  // (1) ensure that deque only contains elements in the current window
  while (deque.length > 0 && deque[0] < start) deque.shift();
  // (2) ensure that all elements smaller than current value are removed
  // from deque so that we can keep deque elements in descending order
  while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[end])
    deque.pop();
};

/*
Deque (Double-ended Queue)
The reason we use dequeue here is because we need to keep two orders.
1. chronological order of index (we achieve this by always pushing elements to the end and removing elements that are out of window from the front)
2. descending order of values (we pop elements greater than current element)

Algorithm:
1. Process first k elements separately to initialise deque and window.
2. Iterate through the rest of array. At each index, ensure that (1) deque only contains elements in the window and that (2) deque elements are in descending order. After these two conditions are ensured, the first element of deque is the max value of current window.
*/
