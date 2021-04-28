/*
Implement Quick Sort
*/

const dutchNationalFlag = (arr, start, end, pivotIdx) => {
  let pivot = arr[pivotIdx];
  let lowerB = start,
    upperB = end;
  for (let i = lowerB; i <= upperB; i++) {
    if (arr[i] > pivot) {
      [arr[i], arr[upperB]] = [arr[upperB], arr[i]];
      upperB--;
      i--;
    } else if (arr[i] < pivot) {
      [arr[i], arr[lowerB]] = [arr[lowerB], arr[i]];
      lowerB++;
    }
  }
  return [lowerB, upperB];
};

const quickSort = (arr, start, end) => {
  if (start < 0 || end > arr.length - 1 || start >= end) {
    return;
  }
  let mid = start + Math.floor((end - start) / 2);
  let [lowerB, upperB] = dutchNationalFlag(arr, start, end, mid);
  quickSort(arr, start, lowerB - 1);
  quickSort(arr, upperB + 1, end);
};

const sort = (arr) => {
  if (arr === null) {
    return null;
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
};

console.log(sort([6, 5, 10, 13, -8, 77]));
