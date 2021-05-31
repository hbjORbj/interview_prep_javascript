/*
Input sorted array [3, 3, 3, 4, 5, 6, 6, 7] of size N, given number K,

return the number of occurrence for K in the input array.
*/

/*
Solution:

Use binary search to find the first occurrence and the last occurrence of target number.
Last position - First position + 1 is the answer.
*/

function numOfFrequency(arr, K) {
  if (arr === null || arr.length === 0) {
    return [-1, -1];
  }
  let firstPos = findPosition(arr, K, true);
  let lastPos = findPosition(arr, K, false);
  return firstPos === -1 ? 0 : lastPos - firstPos + 1;
  // T.C: O(log(N))
  // S.C: O(1)
}

function findPosition(arr, target, findFirst) {
  let pos = -1;
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (findFirst) {
        if (mid - 1 < 0 || arr[mid - 1] < arr[mid]) {
          pos = mid;
          break;
        } else {
          high = mid - 1;
        }
      } else {
        if (mid + 1 >= arr.length || arr[mid] < arr[mid + 1]) {
          pos = mid;
          break;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return pos;
}

console.log(numOfFrequency([1, 1, 2, 3, 3, 3, 3, 3, 4], 1)); // 2
console.log(numOfFrequency([1, 1, 2, 3, 3, 3, 3, 3, 4], 3)); // 5
console.log(numOfFrequency([1, 1, 2, 3, 3, 3, 3, 3, 4], 4)); // 1
