/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

// Get the transpose of given matrix and reverse every row
// Definition of transpose: an operator which flips a matrix over its diagonal
var rotate = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix[0].length; col++) {
            if (row == col) continue;
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
    // Time Complexity: O(N^2)
    // Space Complexity: O(1)
};
