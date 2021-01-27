/*
Rotate an array A by X items.

ex) A = [1,2,3,4,5,6] and X = 2, Result = [5, 6, 1, 2, 3, 4]

Qs
1. Can X be greater than A's length?
- Yes.
*/

var rotateArray = function (arr, X) {
  if (arr == null || X == null) return null;
  if (X == 0 || arr.length <= 1) return arr;
  let shifts = X % arr.length;
  let newArr = [];

  for (let i = arr.length - shifts; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length - shifts; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// Time Complexity: O(N)
// Space Complexity: O(N)

console.log(rotateArray([1, 2, 3, 4, 5, 6], 0));
console.log(rotateArray([1], 2));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 6));

var rotateArray2 = function (arr, X) {
  if (arr == null || X == null) return null;
  if (X == 0 || arr.length <= 1) return arr;
  let shifts = X % arr.length;
  arr.reverse();
  reverse(0, shifts - 1);
  reverse(shifts, arr.length - 1);
  return arr;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++, end--;
    }
  }
};

// 1. Reverse the entire array.
// 2. Reverse the first X elements.
// 3. Reverse the rest.

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log(rotateArray2([1, 2, 3, 4, 5, 6], 0));
console.log(rotateArray2([1], 2));
console.log(rotateArray2([1, 2, 3, 4, 5, 6], 2));
console.log(rotateArray2([1, 2, 3, 4, 5, 6], 3));
console.log(rotateArray2([1, 2, 3, 4, 5, 6], 4));
console.log(rotateArray2([1, 2, 3, 4, 5, 6], 6));
