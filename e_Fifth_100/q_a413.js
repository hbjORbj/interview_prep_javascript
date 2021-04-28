/*
Implement Merge Sort
*/

const sort = (arr) => {
  if (arr === null) {
    return null;
  }
  mergeSort(arr, 0, arr.length - 1);
  return arr;
};

const mergeSort = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  let mid = start + Math.floor((end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const merge = (arr, start, mid, end) => {
  let result = new Array(end - start + 1);
  let i = start,
    j = mid + 1,
    resultPos = 0;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      result[resultPos] = arr[i];
      i++;
    } else {
      result[resultPos] = arr[j];
      j++;
    }
    resultPos++;
  }

  // Flush remaining elements into result
  while (i <= mid) {
    result[resultPos++] = arr[i++];
  }
  while (j <= end) {
    result[resultPos++] = arr[j++];
  }
  // copy result into arr
  for (let i = 0; i < result.length; i++) {
    arr[start + i] = result[i];
  }
};

console.log(sort([6, 5, 10, 13, -8, 77]));
