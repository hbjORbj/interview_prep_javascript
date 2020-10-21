/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

You may assume all four edges of the grid are all surrounded by water.
*/

var numIslands = function(grid) {
    let height = grid.length;
    let width = grid[0].length;
    let count = 0;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == '1') {
                count++;
                visitNeighbours(row, col);
            }
        }
    }
    return count;
    
    function visitNeighbours(row, col) {
        if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = '0';
        visitNeighbours(row-1, col);
        visitNeighbours(row+1, col);
        visitNeighbours(row, col-1);
        visitNeighbours(row, col+1);
    }
    // Time Complexity: O(m*n) where m = height (number of rows) and n = width (number of columns)
    // Space Complexity: O(m*n) due to recursion: we have drawn implicit graphs. 
    // If the whole matrix is a big island (with all elements being '1'), we have traversed n*m implicit vertices

};