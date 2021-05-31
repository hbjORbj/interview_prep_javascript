/*
Sum of Subarray Minimums

Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr.

Since the answer may be large, return the answer modulo 10^9 + 7.
*/

/*
For each number in given array, we will count the number of subarrays in which the number
appears as the minimum. Then, we will multiply it with the number's value and add it to a sum.

The number of subarrays in which the number appears as the minimum = 
distance between current element and element less than current element on the left (Previous Less Element)
*
distance between current element and element less than current element on the right (Next Less Element)

We will fill two arrays PLE[] and NLE[], where PLE[i] is the index of previous less element of arr[i] and NLE[i] is the index of next less element of arr[i] using Stack. Then, we will
iterate through given array and at each index we will add (i-PLE[i]) * (NLE[i]-i) * arr[i] to a global sum. If there isn't PLE for arr[i], PLE[i] will be -1, and if there isn't NLE for arr[i] NLE[i] will be arr.length.

*/
var sumSubarrayMins = function (arr) {
  let M = Math.pow(10, 9) + 7;
  let PLE = new Array(arr.length).fill(-1);
  let NLE = new Array(arr.length).fill(arr.length);
  findPLE(PLE, arr);
  findNLE(NLE, arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = (sum + (i - PLE[i]) * (NLE[i] - i) * arr[i]) % M;
  }
  return sum;
  // T.C: O(N)
  // S.C: O(N)
};

function findPLE(PLE, arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      // we use less than or equal to
      // in either PLE or NLE in order to not miss out on subarrays
      // where there are duplicates of minimum element
      stack.pop();
    }
    if (stack.length > 0) {
      PLE[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
}

function findNLE(NLE, arr) {
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      NLE[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
}
