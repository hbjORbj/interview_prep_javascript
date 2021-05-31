/*
Missing Element in Sorted Array

Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, 

return the kth missing number starting from the leftmost number of the array.
*/

// First Solution
var missingElement = function (nums, k) {
  // missing[i] is the number of missing elements bewteen nums[i] and nums[i+1]
  let missing = new Array(nums.length);
  let totalMissing = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let numOfMissing = nums[i + 1] - nums[i] - 1;
    missing[i] = numOfMissing;
    totalMissing += numOfMissing;
  }
  missing[missing.length - 1] = k > totalMissing ? k - totalMissing : 0;

  // after we jump over k elements, we reach the k-th number
  for (let i = 0; i < missing.length; i++) {
    // k-th number is between current number and next number
    if (missing[i] >= k) {
      return nums[i] + k;
    } else {
      k -= missing[i];
    }
  }
  return -1; // should never be reached
  // T.C: O(N)
  // S.C: O(N)
};

// Second Solution
var missingElement = function (nums, k) {
  // after we jump over k elements, we reach the k-th number
  for (let i = 0; i < nums.length - 1; i++) {
    let missingNums = nums[i + 1] - nums[i] - 1;
    if (missingNums >= k) {
      // k-th number is between current element and next element
      return nums[i] + k;
    } else {
      k -= missingNums;
    }
  }
  // k is greater than all missing elements in between in given array, so
  // we add k (which now represents remaining elements to skip) to last number in given array
  return nums[nums.length - 1] + k;
  // T.C: O(N)
  // S.C: O(1)
};

/*
Third Solution
Slightly Different Approach

The number of missing elements from index 0 to current index i in given array
= 
the number of elements that can be enumerated between the first element (nums[0]) and the current element (nums[i]) 
- the number of elements between first element and current element in given array

For example, consider nums = [4,7,9,10] and we are at i=2. 

The number of elements that can be enumerated between the first element and current element is 4 (5,6,7,8). 

The number of elements between the first element and current element is 1 (because of 7). 

Hence, the number of missing elements from index 0 to current index i in given array is 4-1=3 (which in fact is true because we are missing 5,6 and 8).

In other words, missing[i] = (nums[i] - nums[0] - 1) - (i - 1) =  nums[i] - nums[0] - i
*/
var missingElement = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return null;
  }

  // k-th missing number is beyond the last element of array
  if (k > missing(nums, nums.length - 1)) {
    return nums[nums.length - 1] + (k - missing(nums, nums.length - 1));
  }

  // k-th missing number is within the array
  for (let i = 0; i < nums.length; i++) {
    // k-th missing number is between previous element and current element
    if (missing(nums, i) >= k) {
      // take into account all previous missing numbers
      // previous number + x = k-th missing number
      let x = k - missing(nums, i - 1);
      return nums[i - 1] + x;
    }
  }
  // T.C: O(N)
  // S.C: O(1)
};

function missing(nums, idx) {
  return nums[idx] - nums[0] - idx;
}

/*
// Fourth Solution
// Binary Search

missing[i] = (nums[i] - nums[0] - 1) - (i - 1) =  nums[i] - nums[0] - i,
where missing[i] is the number of missing elements from index 0 to index i in given array (See above for explanation)

1. Use binary search to iterate through elements. 
At each element, check the following:
- if missing[i] >= k
    if missing[i-1] < k
        // k-th missing number is between previous element and current element
        return value (we know that k-th missing number is between previous element and current element)
    else
        // k-th missing number is even less than previous element
        move to left
- else (if missing[i] < k)
    move to right

*/
var missingElement = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return null;
  }

  // k-th missing number is beyond the last element of array
  if (k > missing(nums, nums.length - 1)) {
    return nums[nums.length - 1] + (k - missing(nums, nums.length - 1));
  }

  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    // k-th missing number is less than current element
    if (missing(nums, mid) >= k) {
      // k-th missing number is between previous element and current element
      if (missing(nums, mid - 1) < k) {
        // take into account all previous missing numbers
        // previous number + x = k-th missing number
        let x = k - missing(nums, mid - 1);
        return nums[mid - 1] + x;
      } else {
        // k-th missing number is even less than previous element
        high = mid - 1;
      }
    } else {
      // k-th missing number is greater than current element
      low = mid + 1;
    }
  }
  // T.C: O(log(N))
  // S.C: O(1)
};

function missing(nums, idx) {
  return nums[idx] - nums[0] - idx;
}
