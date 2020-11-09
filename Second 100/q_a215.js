// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

var setZeroes = function(matrix) {
    let height = matrix.length, width = matrix[0].length;
    let rows = new Set(), cols = new Set();
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (matrix[row][col] == 0) {
                rows.add(row);
                cols.add(col);
            }
        }
    }
    
    for (let row of rows) {
        for (let col of cols) {
            traverse(row, col);
        }
    }
    
    function traverse(r, c) {
        for (let i = 0; i < width; i++) {
            matrix[r][i] = 0;
        }
        for (let i = 0; i < height; i++) {
            matrix[i][c] = 0;
        }
    }
    
    return matrix;
    // Time Complexity: O(m * n)
    // Space Complexity: O(m + n), rows will contain at most m elements and cols will contain at most n elements
};