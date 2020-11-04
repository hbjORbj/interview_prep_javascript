/*
DFS implementation of traversal of a 2-D array
*/

function traverse2dArr(grid) {
    let height = grid.length, width = grid[0].length;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    let res = [];
    let visited = new Array(height).fill(0).map(() => new Array(width).fill(false));
    function traverse(row, col, visited) {
        if (row < 0 || row >= width || col < 0 || col >= height || visited[row][col] == true) return;
        res.push(grid[row][col]);
        visited[row][col] = true;
        for (let dir of DIRECTIONS) {
            traverse(row+dir[0],col+dir[1],visited);
        }
    }
    traverse(0, 0, visited);
    return res;
    // Time Complexity: O(m*n) where m = number of rows, n = number of columns
    // Space Complexity: O(m*n)
}
console.log(traverse2dArr(
    [[1,2,3],[4,5,6],[7,8,9]]
));