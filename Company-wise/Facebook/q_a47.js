/*
Leftmost Column with at Least a One

(This problem is an interactive problem.)

A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it.

If such an index does not exist, return -1.

You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the matrix is rows x cols.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.

Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary matrix directly.
*/

// First Solution (Too many API calls)
var leftMostColumnWithOne = function (mat) {
  let [height, width] = mat.dimensions();
  let leftMostCol = Infinity;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (mat[row][col] === 1) {
        leftMostCol = Math.min(leftMostCol, col);
        break;
      }
    }
  }
  return leftMostCol === Infinity ? -1 : leftMostCol;
  // T.C: O(M*N), M = # of rows, N = # of columns
  // S.C: O(1)
};

// Second Solution
// Binary Search for each row
var leftMostColumnWithOne = function (mat) {
  let [height, width] = mat.dimensions();
  let leftMostCol = Infinity;
  for (let row = 0; row < height; row++) {
    let low = 0,
      high = width - 1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (mat.get(row, mid) === 0) {
        low = mid + 1;
      } else {
        if (mid === 0 || mat.get(row, mid - 1) === 0) {
          leftMostCol = Math.min(leftMostCol, mid); // found the left-most 1
          break;
        } else high = mid - 1;
      }
    }
  }
  return leftMostCol === Infinity ? -1 : leftMostCol;
  // T.C: O(Mlog(N)), M = # of rows, N = # of columns
  // S.C: O(1)
};
