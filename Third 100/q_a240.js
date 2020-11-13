/*
Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.
*/

var maxSumSubmatrix = function(matrix, k) {
    if (matrix.length == 0 || matrix[0].length == 0) return null;
    let height = matrix.length, width = matrix[0].length;
    let maxSum = -Infinity;
    for (let colL = 0; colL < width; colL++) {
        let rowSum = new Array(height).fill(0);
        for (let colR = colL; colR < width; colR++) {
            for (let row = 0; row < height; row++) {
                rowSum[row] += matrix[row][colR];
            }
            maxSum = Math.max(maxSum, findMaxSum(rowSum, k));
        }
    }
    return maxSum;
};
// Time Complexity: O(row^2 * col^2)
// Space Complexity: O(row)

function findMaxSum(arr, k) {
    let maxSum = -Infinity;
    for (let l = 0; l < arr.length; l++) {
        let sum = 0;
        for (let r = l; r < arr.length; r++) {
            sum += arr[r];
            if (sum <= k) {
                maxSum = Math.max(maxSum, sum);
            }
        }
    }
    return maxSum;
}
