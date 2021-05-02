/*
Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

var exist = function (board, word) {
  if (board.length === 0 || board[0].length === 0) {
    return false;
  }
  let visiting = new Map();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        if (dfsTraversal(board, row, col, visiting, word, 0)) {
          return true;
        }
      }
    }
  }
  return false;
  // Time Complexity: O(m*n*4^L) where L is the depth of recursion calls
  // Space Complexity: O(m*n)
};

const dfsTraversal = (board, row, col, visiting, target, curIdx) => {
  if (
    row < 0 ||
    row > board.length - 1 ||
    col < 0 ||
    col > board[0].length - 1 ||
    visiting.get(`${row}${col}`) === true ||
    board[row][col] !== target[curIdx]
  ) {
    return;
  }
  if (curIdx === target.length - 1) {
    return true;
  }
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  visiting.set(`${row}${col}`, true);
  for (let [i, j] of DIRECTIONS) {
    if (dfsTraversal(board, row + i, col + j, visiting, target, curIdx + 1)) {
      return true;
    }
  }
  visiting.set(`${row}${col}`, false);
};
