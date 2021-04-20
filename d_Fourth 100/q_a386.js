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

var rotateMatrix2 = function (matrix) {
  if (matrix == null || matrix.length == 0) {
    return matrix;
  }
  let len = matrix.length;
  for (let start = 0; start < Math.floor(len / 2); start++) {
    let end = len - 1 - start;
    rotate(matrix, start, end);
  }
  return matrix;
};

function rotate(matrix, start, end) {
  for (let i = start; i < end; i++) {
    let temp = matrix[start][start + i]; // save top
    matrix[start][start + i] = matrix[end - i][start]; // left to top
    matrix[end - i][start] = matrix[end][end - i]; // bottom to left
    matrix[end][end - i] = matrix[start + i][end]; // right to bottom
    matrix[start + i][end] = temp; // top to right
  }
}

/*
Test cases:
null -> null
[] -> []
[[1]] -> [[1]]

1. Take each layer of the matrix and rotate it individually. Start with the outermost ring, and go through
every layer until we rotate the innermost layer.
2. For each layer, we find the start and end indices. Start and end indices will be the indices for 
rows and columns of the layer.

Time Complexity: O(N), where n is the total number of elements
Space Complexity: O(1)
*/

console.log(rotateMatrix2([[1]]));
console.log(
  rotateMatrix2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
