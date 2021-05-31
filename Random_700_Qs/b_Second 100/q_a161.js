/*
In a given grid, each cell can have one of three values:
- the value 0 representing an empty cell;
- the value 1 representing a fresh orange;
- the value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. 

If this is impossible, return -1 instead.
*/

var orangesRotting = function(grid) {
    let height = grid.length, width = grid[0].length;
    let minutes = 0, queue = [];
    let fresh = 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == 2) {
                addFreshNeighbours(row, col);
            }
            if (grid[row][col] == 1) {
                fresh++;
            }
        }
    }
    while (queue.length > 0) {
        let len = queue.length, rot = 0;
        for (let i = 0; i < len; i++) {
            let [row,col] = queue.shift();
            if (grid[row][col] == 1) {
                grid[row][col] = 2;
                rot++;
                addFreshNeighbours(row, col); 
            }
        }
        if (rot > 0) {
            minutes++;
            fresh -= rot;
        }
    }
    return (fresh == 0) ? minutes : -1;

    // Helper Function
    function addFreshNeighbours(row, col) {
        for (let dir of DIRECTIONS) {
            let x = row+dir[0], y = col+dir[1];
            if (x < 0 || x >= height || y < 0 || y >= width) continue;
            if (grid[x][y] == 1) queue.push([x,y]);
        }
    }
    
    // Time Complexity: O(m*n) where m = the number of row, n = the number of columns
    // Space Complexity: O(m*n)
};