/*
In this problem, let the value of a 0-indexed array be defined as the square of the sum of even-indexed elements minus the sum of odd-indexed elements.

For instance, the value of array [2, -1, -4, 5] is the square of the sum of even-indexed elements (2 and -4) minus the sum of odd-indexed elements (-1 and 5).

Therefore, the value of the array is ([2+(-4)] - [-1+5]) = (-2 - 4) = 36.

Given an array of integers, what is the maximum subarray value among its subarrays?

For example, let's say arr = [-1, -4, 2]. In this case, subarray [-4, 2] has the value (-4 - 2) = (-6) = 36.

This is the largest value among the subarrays of this array, so the answer is 36.

Find the maximum value among all values of subarrays in given array.

* Regardless of the position in given array, the first element of subarray has a position of zero.
*/

/*
Kadane's Algorithm

1. Iterate through given array.
2. At each i, we decide whether to include the current element into our existing subarray
or start a new subarray starting at the current element. We make the decision that maximises the subarray value.
The logic behind this is that at each i, we try to find the subarray with greater value that includes the current element.
3. We repeat this until the end of array. We keep track of maximum subarray value and update it when necessary.
*/

function maxSubarrayValue(arr) {
  if (arr === null || arr.length === 0) {
    return 0;
  }
  let evenSum = arr[0],
    oddSum = 0,
    start = 0;
  let max = getValue(evenSum, oddSum);
  for (let i = 1; i < arr.length; i++) {
    let idx = i - start;
    // including current element into existing subarray
    let value1 =
      idx % 2 === 0
        ? getValue(evenSum + arr[i], oddSum)
        : getValue(evenSum, oddSum + arr[i]);
    // starting a new subarray at current element
    let value2 = getValue(arr[i], 0);

    // we start a new subarray at current element
    if (value2 > value1) {
      max = Math.max(max, value2);
      evenSum = arr[i];
      oddSum = 0;
      start = i;
    } else {
      max = Math.max(max, value1);
      idx % 2 === 0 ? (evenSum += arr[i]) : (oddSum += arr[i]);
    }
  }
  return max;
  // T.C: O(N)
  // S.C: O(1)
}

function getValue(evenSum, oddSum) {
  return Math.pow(evenSum - oddSum, 2);
}
