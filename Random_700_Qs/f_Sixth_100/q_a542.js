/*
Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.

The same letter cell may not be used more than once.
*/

/*
Use DFS to traverse the grid.
Iterate through the grid and start dfs traversal when the first letter of word
is encountered.
While there is an adjacent cell containing the next letter of word, traversal continues
If end of word is reached, return true

One important thing is to keep track of nodes already in path so that they
do not get re-visited, which can lead to an infinite loop
*/
var exist = function (board, word) {
  if (board === null || board.length === 0 || board[0].length === 0) {
    return false;
  }
  let visiting = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfsTraversal(i, j, board, word, 0, visiting)) {
          return true;
        }
      }
    }
  }
  return false;
  // T.C: O(M*N*4^L), L = length of word
  // S.C: O(M*N)
};

const dfsTraversal = (row, col, board, word, idx, visiting) => {
  if (
    row < 0 ||
    row > board.length - 1 ||
    col < 0 ||
    col > board[0].length - 1 ||
    board[row][col] !== word[idx] ||
    visiting.get(`${row}-${col}`)
  ) {
    return;
  }
  if (idx === word.length - 1) {
    return true;
  }
  visiting.set(`${row}-${col}`, true);
  let DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let dir of DIRECTIONS) {
    if (
      dfsTraversal(row + dir[0], col + dir[1], board, word, idx + 1, visiting)
    ) {
      return true;
    }
  }
  visiting.set(`${row}-${col}`, false);
};
