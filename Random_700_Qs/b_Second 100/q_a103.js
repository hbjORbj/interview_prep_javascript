/*
Given a m x n grid filled with non-negative numbers, 

find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

var minPathSum = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    let height = grid.length, width = grid[0].length;
    let minCost = new Array(height).fill(0).map(() => []);
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let curCost = grid[row][col];
            if (row == 0 && col == 0) {
                minCost[row][col] = curCost;
            } else if (row == 0) {
                minCost[row][col] = curCost + minCost[row][col-1]; 
                // there is no possible path from up
            } else if (col == 0) {
                minCost[row][col] = curCost + minCost[row-1][col]; 
                // there is no possible path from left
            } else {
                minCost[row][col] = 
                    Math.min(minCost[row][col-1], minCost[row-1][col]) + curCost;
            }
        }
    }
    return minCost[height-1][width-1];
};

/*
1. Create a 2D-array where arr[i][j] represents the minimum cost to get to this point from the start which is arr[0][0]. 
2. To compute arr[i][j], we need to choose whether we want to come from the left path or the upward path. We will choose the path with the smaller cost and add our current cost and record it in our array.

* When row is 0, there is no possible path from upward, so we just take the path from left. When col is 0, there is no possible path from left, so we just take the path from upward.

3. Repeat this till the end of the grid so that we can find the minimum cost to the right bottom.

Time Complexity: O(m*n)
Space Complexity: O(m*n)
*/

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));

// [[1,3,1],[1,5,1],[4,2,1]] => 7