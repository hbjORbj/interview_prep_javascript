/*
Given a maze with cells being: gates, walls or empty spaces.

Fill the empty spaces with the number of steps to the closest gate. Allowed steps: UP, RIGHT, LEFT & DOWN.

ex) 
Input:
_ W G _
_ _ _ W
_ W _ W
G W _ _

Output:
3 W G 1
2 2 1 W
1 W 2 W
G W 3 4
*/

function wallsAndGatesBFS(maze) {
    if (maze.length == 0) return [];
    let height = maze.length, width = maze[0].length;
    const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (maze[row][col] === 'G') {
                bfs(row, col);
            }
        }
    }
    function bfs(row, col) {
        let queue = [{row: row, col: col, step: 0}];
        while (queue.length > 0) {
            let {row, col, step} = queue.shift();
            if (maze[row][col] == "_" ||  Number.isInteger(maze[row][col])) {
                maze[row][col] = step;
            }
            for (let dir of DIRECTIONS) {
                let x = row + dir[0], y = col + dir[1];
                if (x < 0 || x >= height || y < 0 || y >= width) continue;
                if (maze[x][y] == 'G' || maze[x][y] == 'W' || maze[x][y] <= step) continue;
                queue.push({row: x, col: y, step: step+1});
            }
        }
    }

    return maze;
}

console.log(wallsAndGatesBFS([
['_', 'W', 'G', '_'],
['_', '_', '_', 'W'],
['_', 'W', '_', 'W'],
['G', 'W', '_', '_'],
]));

console.log(wallsAndGatesBFS([
    ['_', 'W', 'G', '_'],
    ['_', 'W', 'G', 'W'],
    ['_', 'W', 'G', 'W'],
    ['G', 'W', 'G', '_'],
]));

function wallsAndGatesDFS(maze) {
    if (maze.length == 0) return [];
    let height = maze.length, width = maze[0].length;
    const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (maze[row][col] === 'G') {
                dfs(row, col, 0);
            }
        }
    }

    function dfs(row, col, step) {
        if (row < 0 || row >= height || col < 0 || col >= width || maze[row][col] <= step) return;
        // we cannot traverse through gates but the starting gate
        if (maze[row][col] == 'G' && step == 0) {
            for (let dir of DIRECTIONS) {
                dfs(row+dir[0], col+dir[1], step + 1);
            }
        }
        
        // we can only traverse through underscore or numbers  
        if (maze[row][col] == "_" || Number.isInteger(maze[row][col])) {
            maze[row][col] = step;
            for (let dir of DIRECTIONS) {
                dfs(row+dir[0], col+dir[1], step + 1);
            }
        }
    }

    return maze;
}

console.log(wallsAndGatesDFS([
    ['_', 'W', 'G', '_'],
    ['_', '_', '_', 'W'],
    ['_', 'W', '_', 'W'],
    ['G', 'W', '_', '_'],
]));

console.log(wallsAndGatesDFS([
    ['_', 'W', 'G', '_'],
    ['_', 'W', 'G', 'W'],
    ['_', 'W', 'G', 'W'],
    ['G', 'W', 'G', '_'],
]));