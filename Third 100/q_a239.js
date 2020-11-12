/*
Range Sum Query 2D - Immutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*/

var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (this.matrix.length == 0) return 0;
    let height = this.matrix.length, width = this.matrix[0].length;
    let sum = 0;
    if (row1 < 0 || row1 >= height || col1 < 0 || col1 >= width
       || row2 < 0 || row2 >= height || col2 < 0 || col2 >= width) return 0;
    for (let row = row1; row <= row2; row++) {
        for (let col = col1; col <= col2; col++) {
            sum += this.matrix[row][col];
        }
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */