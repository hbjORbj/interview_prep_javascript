/*
Range Sum Query 2D - Immutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*/

var NumMatrix = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    this.matrix = matrix;
    this.dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length));
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (col == 0) {
                this.dp[row][col] = this.matrix[row][col];
            }
            else {
                this.dp[row][col] = this.matrix[row][col] + this.dp[row][col-1];
            }
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let height = this.matrix.length, width = this.matrix[0].length;
    if (row1 < 0 || row1 >= height || row2 < 0 || row2 >= height 
        || col1 < 0 || col1 >= width || col2 < 0 || col2 >= width) return 0;
    let sum = 0;
    for (let row = row1; row <= row2; row++) {
        sum += this.dp[row][col2] - (col1 > 0 ? this.dp[row][col1-1] : 0);
    }
    return sum;
};

// Time Complexity: O(m), m = # of rows, per query and O(m*n) for pre-processing matrix
// Space Complexity: O(m*n), for dp table

/**************************************************************************************************/

var NumMatrix = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    this.matrix = matrix;
    this.dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length));
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let left = col > 0 ? this.dp[row][col-1] : 0;
            let up = row > 0 ? this.dp[row-1][col] : 0;
            let overlap = row > 0 && col > 0 ? this.dp[row-1][col-1] : 0;
            this.dp[row][col] = this.matrix[row][col] + left + up - overlap;
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let height = this.matrix.length, width = this.matrix[0].length;
    if (row1 < 0 || row1 >= height || row2 < 0 || row2 >= height 
        || col1 < 0 || col1 >= width || col2 < 0 || col2 >= width) return 0;
    let biggerR = this.dp[row2][col2];
    let upperR = row1 > 0 ? this.dp[row1-1][col2] : 0;
    let leftR = col1 > 0 ? this.dp[row2][col1-1] : 0;
    let overlapR = row1 > 0 && col1 > 0 ? this.dp[row1-1][col1-1] : 0;
    return biggerR - upperR - leftR + overlapR;
};

// Time Complexity: O(1) per query and O(m*n) for pre-processing DP table
// Space Complexity: O(m*n), for dp table
