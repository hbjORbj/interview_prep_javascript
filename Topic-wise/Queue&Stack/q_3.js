/*
Next Greater Element I

You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.

If it does not exist, return -1 for this number.
*/

/*
1. Iterate through nums2 and for every number find the next greater number and record it
to a Hash Table.
2. Iterate through nums1 and for each number get the next greater number from Hash table.

For step 1, we can find the next greater number for each element using Stack.

Iteration from the start of array:
- For each element, we want to check if there is smaller element in stack. 
- Hence, we keep popping from stack until we find a number greater than or equal to current element.
For all popped numbers, current element is their Next Greater Number. Hence, we record them to a Hash Table
with current element as their NGN.
- Then, we push current element into stack so that we can find the NGN for current number (or not if there isn't one).
*/
var nextGreaterElement = function(nums1, nums2) {
  if (nums1 === null || nums2 === null || nums1.length === 0 || nums2.length === 0) {
      return [];
  }
  let m = new Map();
  let stack = [];
  for (let i = 0; i < nums2.length; i++) {
      while (stack.length > 0 && nums2[i] > stack[stack.length-1]) {
          // nums2[i] is the Next Greater Number of popped element
          m.set(stack.pop(), nums2[i]);
      }
      stack.push(nums2[i]);
  }
  return nums1.map(num => m.get(num) || -1);
  // T.C: O(N)
  // S.C: O(N)
};

/*
1. Iterate through nums2 and for every number find the next greater number and record it
to a Hash Table.
2. Iterate through nums1 and for each number get the next greater number from Hash table.

For step 1, we can find the next greater number for each element using Stack.

Iteration from the back of array:
- For each element, we want to check if there is greater element in stack. 
- Hence, we keep popping from stack until we find the greater number or stack gets empty.
- Then, we push current element into stack so that our next element can find its NGN (Next Greater Number).
*/
var nextGreaterElement = function (nums1, nums2) {
  if (
    nums1 === null ||
    nums2 === null ||
    nums1.length === 0 ||
    nums2.length === 0
  ) {
    return [];
  }
  let m = new Map();
  let stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      m.set(nums2[i], stack[stack.length - 1]);
    } else {
      m.set(nums2[i], -1);
    }
    stack.push(nums2[i]);
  }
  let res = nums1.map((num) => m.get(num));
  return res;
  // T.C: O(N)
  // S.C: O(N)
};