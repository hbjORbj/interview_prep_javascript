/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. 

The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.
*/

var knightProbability = function(N, K, r, c) {
    const DIRECTIONS = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]];
    let memo = new Map();
    function stayOnBoard(K, r, c) {
        if (r < 0 || r >= N || c < 0 || c >= N) return 0;
        if (K == 0) return 1;
        let key = `${K}#${r}#${c}`;
        if (memo.has(key)) return memo.get(key);

        let probability = 0;
        for (let dir of DIRECTIONS) {
            let [x, y] = dir;
            probability += stayOnBoard(K-1, r+x, c+y) / 8;
        }
        memo.set(key, probability);
        return probability;
    }
    return stayOnBoard(K, r, c);
    // stayOnBoard(K, r, c, grid) represents the probability that the knight starting from (r,c) remains on the board after K moves
};
// Top-down
// Time Complexity: O(K * N^2)
// Space Complexity: O(K * N^2)

var knightProbability = function(N, K, r, c) {
    const DIRECTIONS = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]];
    let grid = new Array(K+1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N)));
    grid[0][r][c] = 1; // base case; when K = 0, the probability that the knight at (r,c) remains on the board is 1
    // grid[k][x][y] represents the probability that (r,c) remains at (x,y) after k moves

    for (let k = 1; k <= K; k++) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                grid[k][row][col] = findProbability(row, col, k-1) / 8;
            }
        }
    }
    
    let res = 0;
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            res += grid[K][row][col];
        }
    }
    return res;
     
    function findProbability(row, col, k) {
        let probability = 0;
        for (let dir of DIRECTIONS) {
            const [x,y] = dir;
            if (row+x < 0 || row+x >= N || col+y < 0 || col+y >= N) continue;
            if (grid[k][row+x][col+y]) {
                probability += grid[k][row+x][col+y];
            }
        }
        return probability;
    }
}
// Bottom-up
// Time Complexity: O(K * N^2)
// Space Complexity: O(K * N^2)