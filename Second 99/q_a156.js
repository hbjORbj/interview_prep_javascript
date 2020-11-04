/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

You may assume all four edges of the grid are all surrounded by water.

ex) 
( grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]) => 1
*/

function numberOfIslands(grid) {
    if (grid.length <= 0) return 0;
    let count = 0, DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    let height = grid.length, width = grid[0].length;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == '1') { // there is no chance '0' is part of an island
                traverse(row, col); // once this finishes, we've visited all lands of one island
                count++;
            }
        }
    }

    return count;

    // Helper function
    function traverse(row, col) {
        if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = "0"; // turn land to water since we already visited it
        for (let dir of DIRECTIONS) {
            traverse(row+dir[0],col+dir[1]);
        }
    }
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n), if the entire grid is one island, it will take up m*n space in function call stack
}

console.log(numberOfIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));

  var numIslands = function(grid) {
    let height = grid.length, width = grid[0].length;
    let count = 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == "1") {
                count++;
                traverse([[row,col]]);
            }
        }
    }
    return count;
    
    // BFS Traversal
    function traverse(queue) {
        while (queue.length > 0) {
            let [row, col] = queue.shift();
            if (row < 0 || row >= height || col < 0 || col >= width 
                || grid[row][col] == '0') continue;
            grid[row][col] = "0"; // mark so that we know we already visited it
            for (let dir of DIRECTIONS) {
                queue.push([row+dir[0], col+dir[1]]);
            }
        }
    }
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n), queue might contain m*n elements if the entire grid is one island
};