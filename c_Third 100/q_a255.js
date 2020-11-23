/*
You are given a m x n 2D grid initialized with these three possible values.

1. -1 - A wall or an obstacle.
2. 0 - A gate.
3. INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
*/

var wallsAndGates = function(rooms) {
    // Perform DFS from each gate
    if (rooms.length == 0 || rooms[0].length == 0) return;
    let height = rooms.length, width = rooms[0].length;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (rooms[row][col] == 0) { // found a gate
                fillRooms(row, col, 0);
            }
        }
    }
    
    function fillRooms(r, c, dis) {
        if (r < 0 || r >= height || c < 0 || c >= width ||
            rooms[r][c] < dis) return; // it's already visited by a closer gate
        rooms[r][c] = dis;
        const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
        for (let dir of DIRECTIONS) {
            fillRooms(r + dir[0], c + dir[1], dis + 1);
        }
    }
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n), call stack can go as deep as number of nodes
};