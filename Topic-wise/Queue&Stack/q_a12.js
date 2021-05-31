/*
Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.
*/

/*
[Array] First Solution

1. Iterate through given array from start. 
Find the first dip (arr[i] > arr[i+1]).
Call i `left`.
2, Iterate through given array from end.
Find the first bump (arr[i-1] > arr[i]).
Call i `right.`
3. Sort the subarray[left...right] is not sufficient.
Find the minimum value and maximum value in this subarray.
4. We iterate from `left` towards 0 and expand `left` outwards to include all numbers
greater than minimum of subarray.
5. We iterate from `right` towards end and expand `right` outwards to include all numbers
less than maximum of subarray.
*/
var findUnsortedSubarray = function (nums) {
  let left = -1,
    right = -1;
  // find first dip
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      left = i;
      break;
    }
  }
  if (left === -1) return 0; // nums is already in ascending order
  // find first bump
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      right = i;
      break;
    }
  }
  // find max and min of subarray[left...right]
  let max = -Infinity,
    min = Infinity;
  for (let i = left; i <= right; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  // expand left outwards to include all numbers greater than min
  while (left > 0 && nums[left - 1] > min) {
    left--;
  }
  // expand right outwards to include all numbers less than max
  while (right < nums.length && nums[right + 1] < max) {
    right++;
  }
  return right - left + 1;
  // T.C: O(N)
  // S.C: O(N)
};

/*
[Stack] Second Solution

We will use a stack.
1. Iterate through given array from start.
2. At each element, we check if stack contains an element greater than current element.
If so, our array is NOT sorted from the index of that element in stack. We keep popping
greater elements and record the minimum index.
3. Iterate through given array from back.
4. At each element, we check if stack contains an element less than current element. If so,
our array is NOT sorted from the index of that element. We keep popping greater elements and
record the maximum index.
5. the subarray[min...max] is the minimum subarray. Return its size.
*/
var findUnsortedSubarray = function (nums) {
  let stack = [];
  let min = Infinity,
    max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    // keep popping greater elements and record the minimum index
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      let popped = stack.pop();
      min = Math.min(min, popped);
    }
    stack.push(i);
  }
  if (min === Infinity) return 0; // array is already sorted in ascending order
  stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    // keep popping smaller elements and record the maximum index
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      let popped = stack.pop();
      max = Math.max(max, popped);
    }
    stack.push(i);
  }
  return max - min + 1;
  // T.C: O(N)
  // S.C: O(N)
};
