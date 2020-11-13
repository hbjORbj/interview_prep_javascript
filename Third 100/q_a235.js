/*
Given a M * N matrix, find the maximum sum rectangle and their top-left and final-bottom position.
*/

function maxSumRectangle(matrix) {
    if (matrix.length == 0) return null;
    let height = matrix.length, width = matrix[0].length;
    let maxSum = -Infinity;
    let maxRecLeft, maxRecRight, maxRecTop, maxRecBottom;
    for (let colL = 0; colL < width; colL++) {
        let rowSum = new Array(height).fill(0);
        for (let colR = colL; colR < width; colR++) {
            for (let row = 0; row < height; row++) {
                rowSum[row] += matrix[row][colR];
            }
            [sum, recTop, recBottom] = findMaxSum(rowSum);
            if (sum > maxSum) {
                maxSum = sum;
                maxRecTop = recTop;
                maxRecBottom = recBottom;
                maxRecLeft = colL;
                maxRecRight = colR;
            }
        }
    }
    return [[maxRecTop, maxRecLeft], [maxRecBottom, maxRecRight], maxSum];
}

function findMaxSum(arr) {
    let subArrSum = 0, maxSum = -Infinity;
    let start = 0, end = 0;
    for (let i = 0; i < arr.length; i++) {
        subArrSum = Math.max(subArrSum + arr[i], arr[i]);
        if (maxSum < subArrSum) {
            maxSum = subArrSum;
            if (subArrSum == arr[i]) start = i;
            end = i;
        }
    }
    return [maxSum, start, end];
}

console.log(maxSumRectangle(
    [
        [1,7],
        [3,-5],
        [5,6],
        [6,7]
    ]
)); // => [[0,0], [3,1], 30]

console.log(maxSumRectangle(
    [
        [6,-5,-7,4,-4],
        [-9,3,-6,5,2],
        [-10,4,7,-6,3],
        [-8,9,-3,3,-7]
    ]
)); // => [[2,1], [3,2], 17]

// We keep a left boundary and right boundary of our current rectangle. left boundary starts at zero and right boundary starts at where left boundary starts.
// We track a running row sum so that we can find the max sum rectangle at current left boundary and right boundary.
// We can do this by performing Kadane's algorithm on the running row sum every time we increment the right boundary.
// Once the right boundary reaches the end (width - 1), we increment the left boundary.
// Repeat this process until left boundary reaches the end (width - 1).
// In this way, we can traverse all possible rectangles and find the max sum rectangle.