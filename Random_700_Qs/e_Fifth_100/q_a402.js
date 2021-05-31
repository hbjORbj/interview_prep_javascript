/*
You are given a 2D array that represents a maze. It can have 2 values - 0 and 1. 

1 represents a wall in the maze and 0 represents a path.

The objective of the maze is to reach the bottom right corner, or A[A.length-1][A.length-1].

You start from A[0][0] and can only go right or down. 

Find if a path exists to the bottom right of the maze from A[0][0].
*/

const pathExists = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let numOfRows = matrix.length,
    numOfCols = matrix[0].length;
  let visited = new Array(numOfRows).fill(0).map(() => new Array(numOfCols));
  return findPath(0, 0);

  function findPath(i, j) {
    if (i >= numOfRows || j >= numOfCols || matrix[i][j] === 1) {
      return false;
    }
    if (i === numOfRows - 1 && j === numOfCols - 1) {
      return true;
    }
    if (visited[i][j] !== undefined) {
      return visited[i][j];
    }
    if (findPath(i, j + 1) || findPath(i + 1, j)) {
      visited[i][j] = true;
      return true;
    }
    visited[i][j] = false;
    return false;
  }
  // T.C: O(M * N), M = # of rows and N = # of cols
  // S.C: O(M * N)
};

console.log(
  pathExists([
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
  ]) // => true
);

console.log(
  pathExists([
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ]) // => false
);
