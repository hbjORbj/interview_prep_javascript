/*
Given an array of numbers, replace each even number with two of the same number. e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].

Assume that the array has the exact amount of space to accommodate the result.
*/

const doubleEvens = (arr) => {
  let i = getLastIndex(arr);
  let end = arr.length - 1;
  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      arr[end] = arr[i];
      end--;
    }
    arr[end] = arr[i];
    end--;
    i--;
  }
  return arr;
  // T.C: O(N)
  // S.C: O(1)
};

const getLastIndex = (arr) => {
  let i = 0;
  while (arr[i + 1] !== -1) {
    i++;
  }
  return i;
};

let testArr = new Array(8);
testArr[0] = 1;
testArr[1] = 2;
testArr[2] = 5;
testArr[3] = 6;
testArr[4] = 8;
testArr[5] = -1;
testArr[6] = -1;
testArr[7] = -1;
console.log(doubleEvens(testArr));
