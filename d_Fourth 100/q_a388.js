/*
Print elements of a matrix in spiral order.

Qs
1. Can the matrix be a rectangle?
- Yes.
2. What if the matrix is null or empty?
- Print nothing.
*/

var spiralMatrix = function (matrix) {
  if (matrix.length == 0 || matrix == null) return;
  let res = [];
  for (let layer = 0; layer <= Math.floor(matrix.length / 2); layer++) {
    let lastRow = matrix.length - 1 - layer;
    let lastCol = matrix[layer].length - 1 - layer;
    spiralMatrix_helper(layer, lastRow, lastCol, matrix, res);
  }
  return res;
};

function spiralMatrix_helper(layer, lastRow, lastCol, matrix, res) {
  // handle the center element
  if (lastCol == layer && lastRow == layer) {
    res.push(matrix[layer][layer]);
  }
  // top
  for (let i = layer; i < lastCol; i++) {
    res.push(matrix[layer][i]);
  }

  // right
  for (let i = layer; i < lastRow; i++) {
    res.push(matrix[i][lastCol]);
  }
  // bottom
  for (let i = lastCol; i > layer; i--) {
    res.push(matrix[lastRow][i]);
  }
  // left
  for (let i = lastRow; i > layer; i--) {
    res.push(matrix[i][layer]);
  }
}

/*
Test cases:
null => 
[] =>
[[1]] => [1]
[
    [1,2,3,4],
    [5,6,7,8],     
    [9,10,11,12] 
]

1. Starting from the outermost layer, we print each layer until we reach the innermost layer.
2. We print four sides of each layer. To do so, we need the last row and last column of every layer.
*/

console.log(spiralMatrix([[1]]));

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
