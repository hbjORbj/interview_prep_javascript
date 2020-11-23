/*
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
*/

var maximalRectangle = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0;
    let height = matrix.length, width = matrix[0].length;
    
    // Populate DP table
    // dp[row][col] represents the maximum width of rectangle in the particular row whose end is at (row,col).
    let dp = new Array(height).fill(0).map(() => new Array(width).fill(0));
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (matrix[row][col] == '1') {
                dp[row][col] = col > 0 ? dp[row][col-1] + 1 : 1;
            }
        }
    }
    
    // Go through DP table, and every time we encounter a number greater than 0 (which means we can form a rectangle), we scan through the particular column and try all possible rectangles using the values in the column (which represent maximum widths of rectangle in each row that ends at this column)
    let max = 0;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (dp[row][col] > 0) {
                let width = dp[row][col], length = 1, curArea = width * length;
                for (let k = row; k < height; k++) {
                    width = Math.min(width, dp[k][col]);
                    length = k - row + 1;
                    curArea = width * length;
                    max = Math.max(max, curArea);
                }
            }
        }
    }
    return max;
    // Time Complexity: O(row^2 * col)
    // Space Complexity: O(row * col)
};

/****************************************************************************************************************/