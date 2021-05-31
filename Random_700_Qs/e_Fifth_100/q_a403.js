/*
Extension of Q402:
Now, let's say you are allowed to go all 4 directions in the maze. How will your algorithm change?
*/

const pathExists = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let numOfRows = matrix.length;
  let numOfCols = matrix[0].length;
  let visited = new Array(numOfRows).fill(0).map(() => new Array(numOfCols));
  let visiting = new Array(numOfRows).fill(0).map(() => new Array(numOfCols));

  function findPath(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= numOfRows ||
      j >= numOfCols ||
      matrix[i][j] === 1 ||
      visiting[i][j] === true
      // we want to avoid an infinite loop that can occur
      // if we go back to a point that is already part of the current path
    ) {
      return false;
    }
    if (i === numOfRows - 1 && j === numOfCols - 1) {
      return true;
    }
    if (visited[i][j] !== undefined) {
      return visited[i][j];
    }
    visiting[i][j] = true;
    if (
      findPath(i - 1, j) ||
      findPath(i, j + 1) ||
      findPath(i + 1, j) ||
      findPath(i, j - 1)
    ) {
      visited[i][j] = true;
      visiting[i][j] = false;
      return true;
    }
    visiting[i][j] = false;
    visited[i][j] = false;
    return false;
  }
  return findPath(0, 0);
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
  ]) // => true
);
