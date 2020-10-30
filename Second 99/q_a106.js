/*
Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  

The next row's choice must be in a column that is different from the previous row's column by at most one.
*/

var minFallingPathSum = function(A) {
    let height = A.length, width = A[0].length;
    
    for (let row = height-2; row >= 0; row--) {
        for (let col = 0; col < width; col++) {
            if (col == 0) {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col+1]);
            }
            else if (col == width-1) {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col-1]);
            }
            else {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col-1], A[row+1][col+1]) 
            }

        }
    }
    return Math.min(...A[0]);
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
};
/*
Let dp(r, c) be the minimum weight of a falling path starting at (r, c) and reaching the bottom row. So, the answer will be Math.min(...dp[0]).

dp(r,c) = dp(r,c) + Math.min(dp(r+1,c), dp(r+1,c-1), dp(r+1,c+1)).

Usually, we would make an auxillary array dp to cache intermediate values dp(r, c). However, this time we will use A to cache these values. Our goal is to transform the values of A into the values of dp.
*/