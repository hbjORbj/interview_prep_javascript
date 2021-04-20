/*
An image is a square matrix of pixels. Rotate a square image by 90 degrees, given an array of
pixels as integers.

ex) 
1 2 3    7 4 1
4 5 6 -> 8 5 2
7 8 9    9 6 3
*/

/*
Qs
1. Should I modify the matrix in-place?
- Yes.
2. What if the matrix is empty or null?
- Do nothing.
*/

var rotateMatrix = function (matrix) {
  if (matrix.length == 0 || matrix == null) return matrix;
  let len = matrix.length;
  // Tranpose the matrix
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (i !== j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
  // Reverse each row
  for (let row = 0; row < len; row++) {
    reverseRow(row, matrix);
  }

  return matrix;
};

function reverseRow(row, matrix) {
  let start = 0,
    end = matrix.length - 1;
  while (start < end) {
    [matrix[row][start], matrix[row][end]] = [
      matrix[row][end],
      matrix[row][start],
    ];
    start++, end--;
  }
}

/*
Test cases:
null -> null
[] -> []
[1] -> [1]

1. Transpose the matrix.
2. Reverse each row.

Time Complexity: O(N), where n is the total number of elements
Space Complexity: O(1)
*/

console.log(rotateMatrix([1]));
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
