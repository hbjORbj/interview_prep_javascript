/*
Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

var rotate = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return;
  }
  transpose(matrix);
  for (let i = 0; i < matrix.length; i++) {
    reverseRow(matrix, i);
  }
  return matrix;
  // T.C: O(N^2)
  // S.C: O(1)
};

const transpose = (matrix) => {
  let N = matrix.length;
  for (let row = 0; row < N; row++) {
    for (let col = row; col < N; col++) {
      if (row !== col) {
        [matrix[row][col], matrix[col][row]] = [
          matrix[col][row],
          matrix[row][col],
        ];
      }
    }
  }
};

const reverseRow = (matrix, row) => {
  let start = 0,
    end = matrix.length - 1;
  while (start < end) {
    let temp = matrix[row][start];
    matrix[row][start] = matrix[row][end];
    matrix[row][end] = temp;
    start++, end--;
  }
};

/*
Solution:
1. Get the transpose of the matrix.
2. Reverse each row.
*/
