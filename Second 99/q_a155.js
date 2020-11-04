/*
BFS implementation of traversal of a 2-D array
*/

function traverse2dArr(grid) {
    let height = grid.length, width = grid[0].length;
    let visited = new Array(height).fill(0).map(() => new Array(width).fill(false));
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    let values = [], queue = [[0,0]];

    while (queue.length > 0) {
        let [row, col] = queue.shift();
        if (row < 0 || row >= height || col < 0 || col >= width || visited[row][col] == true) {
            continue;
        }
        values.push(grid[row][col]);
        visited[row][col] = true;
        for (let dir of DIRECTIONS) {
            queue.push([row+dir[0], col+dir[1]]);
        }
    }
    return values;
    // Time Complexity: O(m*n) where m = number of rows, n = number of columns
    // Space Complexity: O(m*n)
}

console.log(traverse2dArr(
    [[1,2,3],[4,5,6],[7,8,9]]
));