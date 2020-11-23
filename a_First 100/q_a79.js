/*

*/
var orangesRotting = function(grid) {
    if (grid.length == 0) return 0; // empty grid
    
    let height = grid.length, width = grid[0].length;
    let queue = [], freshOranges = 0, minutes = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            }
            else if (grid[i][j] == 1) {
                freshOranges++;
            }
        }
    }
    if (freshOranges == 0) return 0; // no fresh orange 
    if (queue.length == 0) return -1; // no rotten orange
    
    while (queue.length > 0) {
        let len = queue.length;
        let rot = 0;
        for (let i = 0; i < len; i++) {
            let [row, col] = queue.shift();
            if (grid[row][col] == 1) {
                grid[row][col] = 2;
                rot++;
            }

            if (row > 0 && grid[row-1][col] == 1) {
                queue.push([row-1, col]);
            }
            if (row < height-1 && grid[row+1][col] == 1) {
                queue.push([row+1, col]);
            }
            if (grid[row][col-1] == 1) {
                queue.push([row, col-1]);
            }
            if (grid[row][col+1] == 1) {
                queue.push([row, col+1]);
            }
        }
        freshOranges -= rot;
        if (rot > 0) minutes++;
    }
    return freshOranges == 0 ? minutes : -1;
};
    
/*
Qs: 
1. What to return if the grid is empty?
    - Return 0.
2. What to return if there is no fresh orange?
    - Return 0.
3. What to return if there is no rotten orange?
    - Return -1.
4. What to return if it is impossible to rot every orange?
    - Return -1.
*/
/*
Time Complexity: O(n*m) where n = the number of row, m = the number of columns
Space Complexity: O(n*m)

Category: BFS
*/