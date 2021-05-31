/*
Given an array of integers, find the shortest sub array, that if sorted, results in the entire array
being sorted.

For example,
[1,2,4,5,3,5,6,7] -> [4,5,3]
[1,3,5,2,6,4,7,8,9] -> [3,5,2,6,4]
*/

/*
Qs
1. How do you want the output?
- As a pair of indices.
2. Are duplicates allowed?
- Yes.
3. Are negative numbers allowed?
- Yes.
4. What if the array is already sorted?
- Return an empty array.
*/

var sortSubarray = function (arr) {
  if (arr == null) return null;
  let start = 0,
    end = arr.length - 1;

  // Find the first dip
  while (start < arr.length - 1) {
    if (arr[start] > arr[start + 1]) {
      break;
    }
    start++;
  }

  // No dip, meaning that array is already sorted
  if (start == arr.length - 1) return [];

  // Find the first bump
  while (end > 0) {
    if (arr[end] < arr[end - 1]) {
      break;
    }
    end--;
  }
  let min = Infinity,
    max = -Infinity;
  // Find min and max of arr[start...end]
  for (let i = start; i <= end; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // Expand pointers outward
  while (start > 0 && arr[start - 1] > min) {
    start--;
  }
  while (end < arr.length - 1 && arr[end + 1] < max) {
    end++;
  }
  return [start, end];
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};
/*
1. Start from the beginning, find the first dip and let's call this index `start`.
2. Start from the end, find the first bump and let's call this index `end`.

The subarray [start...end] is unsorted. But, simply sorting this subarray does not guarantee that
the entire array is sorted.

So, we find the minimum of this subarray and include all numbers greater than this minimum by expanding the `start` pointer
Likewise, we find the maximum of this subarray and include all numbers less than this maximum by expanding the `end` pointer
*/

console.log(sortSubarray([1, 2, 4, 5, 3, 5, 6, 7]));
console.log(sortSubarray([1, 3, 5, 2, 6, 4, 7, 8, 9]));
console.log(sortSubarray([1, 2, 3, 6, 4, 7, 4, 8, 9, 10]));
console.log(sortSubarray([1, 2, 4, 5, 3, 7, 5, 6, 8]));
console.log("----------------------");

// Same solution differently written
const sortSubarray2 = (arr) => {
  let start = -1,
    end = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }
  // The array is already sorted
  if (start === -1) {
    return [];
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      end = i;
      break;
    }
  }
  let max = findMax(arr, start, end);
  let min = findMin(arr, start, end);
  while (start > 0 && arr[start - 1] > min) {
    start--;
  }
  while (end < arr.length - 1 && arr[end + 1] < max) {
    end++;
  }
  return [start, end];
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

const findMax = (arr, start, end) => {
  let max = -Infinity;
  for (let i = start; i <= end; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const findMin = (arr, start, end) => {
  let min = Infinity;
  for (let i = start; i <= end; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

console.log(sortSubarray2([1, 2, 4, 5, 3, 5, 6, 7]));
console.log(sortSubarray2([1, 3, 5, 2, 6, 4, 7, 8, 9]));
console.log(sortSubarray2([1, 2, 3, 6, 4, 7, 4, 8, 9, 10]));
console.log(sortSubarray2([1, 2, 4, 5, 3, 7, 5, 6, 8]));
