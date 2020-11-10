/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.
*/

// With using "visited" matrix
var solve = function(board) {
    if (board.length == 0) return;
    let height = board.length, width = board[0].length;
    let visited = new Array(height).fill(0).map(() => new Array(width).fill(false));
    checkBorders(board, visited);
    
    for (let row = 1; row < height-1; row++) {
        for (let col = 1; col < width-1; col++) {
            if (board[row][col] == 'O') {
                dfs(row, col, board, visited, true);
            }
        }
    }
    // Time Complexity: O(m*n), we visit all nodes only once
    // Space Complexity: O(m*n), visited matrix
};

function checkBorders(board, visited) {
    let height = board.length, width = board[0].length;
    for (let row = 0; row < height; row++) {
        if (board[row][0] === 'O') dfs(row, 0, board, visited, false);
        if (board[row][width-1] === 'O') dfs(row, width-1, board, visited, false);
    }
    for (let col = 0; col < width; col++) {
        if (board[0][col] === 'O') dfs(0, col, board, visited, false);
        if (board[height-1][col] === 'O') dfs(height-1, col, board, visited, false);
    }
}

function dfs(row, col, board, visited, mark) {
    if (row < 0 || row >= board.length || col < 0 
        || col >= board[0].length || visited[row][col] == true 
        || board[row][col] === 'X') return;
    visited[row][col] = true;
    if (mark) board[row][col] = 'X';
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let dir of DIRECTIONS) {
        dfs(row+dir[0], col+dir[1], board, visited, mark);
    }
}

/*************************************************************************************/

// Without using "visited" matrix
var solve = function(board) {
    if (board.length == 0) return;
    let height = board.length, width = board[0].length;
    checkBorders(board);
    
    for (let row = 1; row < height-1; row++) {
        for (let col = 1; col < width-1; col++) {
            if (board[row][col] == 'O') {
                dfs(row, col, board, false);
            }
        }
    }
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (board[row][col] == 'M') {
                board[row][col] = 'O';
            }
        }
    }
    // Time Complexity: O(m*n), we visit all nodes
    // Space Complexity: O(m*n), call stack can go as deep as number of nodes
};

function checkBorders(board) {
    let height = board.length, width = board[0].length;
    for (let row = 0; row < height; row++) {
        if (board[row][0] === 'O') dfs(row, 0, board, true);
        if (board[row][width-1] === 'O') dfs(row, width-1, board, true);
    }
    for (let col = 0; col < width; col++) {
        if (board[0][col] === 'O') dfs(0, col, board, true);
        if (board[height-1][col] === 'O') dfs(height-1, col, board, true);
    }
}

function dfs(row, col, board, fromBorder) {
    if (row < 0 || row >= board.length || col < 0 
        || col >= board[0].length || board[row][col] !== 'O') return;
    if (fromBorder) board[row][col] = 'M';
    else board[row][col] = 'X';
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let dir of DIRECTIONS) {
        dfs(row+dir[0], col+dir[1], board, fromBorder);
    }
}