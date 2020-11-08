/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically 

neighboring. The same letter cell may not be used more than once.
*/

var exist = function(board, word) {
    let height = board.length, width = board[0].length;
    let visiting = new Array(height).fill(0).map(() => new Array(width).fill(false));
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (findWord(row, col, 0)) return true;
        }
    }
    return false;
    
    // Helper Function
    function findWord(row, col, idx) {
        if (row < 0 || row >= height || col < 0 || col >= width 
            || board[row][col] !== word[idx]
            || visiting[row][col] == true) return;        
        if (idx == word.length-1) return true;
        
        visiting[row][col] = true;
        
        for (let dir of DIRECTIONS) {
            if (findWord(row+dir[0], col+dir[1], idx+1)) return true;
        }
        
        visiting[row][col] = false;
    }
    
    // Time Complexity: O(m*n*4^L) where L is the depth of recursion calls
    // Space Complexity: O(m*n)
};