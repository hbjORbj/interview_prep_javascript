/*
At each topmost row cell and at each leftmost column cell,
traverse the diagonal, sort it and fill the diagonal with sorted values.
*/
var diagonalSort = function (mat) {
  if (mat.length === 0 || mat[0].length === 0) {
    return [];
  }

  let height = mat.length,
    width = mat[0].length;
  // Diagonal Traversal from Topmost Row cell
  for (let i = 0; i < width; i++) {
    let diagonal = [];
    let row = 0,
      col = i;
    while (validIdx(mat, row, col)) {
      diagonal.push(mat[row][col]);
      row++, col++;
    }
    diagonal.sort((a, b) => a - b);
    let idx = 0;
    (row = 0), (col = i);
    while (validIdx(mat, row, col)) {
      mat[row][col] = diagonal[idx++];
      row++, col++;
    }
  }
  // Diagonal Traversal from Leftmost Column cell
  for (let i = 1; i < height; i++) {
    let diagonal = [];
    let row = i,
      col = 0;
    while (validIdx(mat, row, col)) {
      diagonal.push(mat[row][col]);
      row++, col++;
    }
    diagonal.sort((a, b) => a - b);
    let idx = 0;
    (row = i), (col = 0);
    while (validIdx(mat, row, col)) {
      mat[row][col] = diagonal[idx++];
      row++, col++;
    }
  }

  return mat;
  // T.C: O(M*N*log(maxDiagonalLen))
  // S.C: O(maxDiagonalLen)
};

function validIdx(grid, row, col) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}
