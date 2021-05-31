/*
Sparse Matrix Multiplication

Given two sparse matrices mat1 of size m x k and mat2 of size k x n,

return the result of mat1 x mat2. You may assume that multiplication is always possible.
*/

/*
First Solution:

(m x k) * (k x n) results in (m x n) matrix

In matrix multiplication,
for entries in i-th row in new matrix,
we multiply i-th row in first matrix and i-th column in second matrix.
It is important that we multiply the correct pair of numbers.
When multiplying i-th row and i-th column, we multiply a pair of numbers x and y so that
x's column number == y's row number and sum it up.
ex) [1 1 1] [ 7
              6
              5 ]
              
In order to multiply this row and column, we do 1*7 + 1*6 + 1*5 = 18 and
its resulting matrix is [18].
*/
var multiply = function (mat1, mat2) {
  if (
    mat1.length === 0 ||
    mat2.length === 0 ||
    mat1[0].length !== mat2.length
  ) {
    return [];
  }
  let m = mat1.length,
    k = mat1[0].length,
    n = mat2[0].length;
  let res = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let z = 0; z < k; z++) {
        sum += mat1[i][z] * mat2[z][j];
      }
      res[i][j] = sum;
    }
  }
  return res;
  // T.C: O(m*n*k)
  // S.C: O(m*n)
};

/*
Second Solution:
Sparse matrix consists of many zeroes. Hence, that's the point where we can reduce time complexity.

1. We will iterate through first matrix. At each entry, check if it is zero. If so, continue.
Else, let's say we are currently at row=r and col=c. We will iterate through a column of matrix2 at
row=c, multiply each entry in matrix2 with current entry in matrix1 and add it to resulting matrix.
The product should be added to [r][x] where x iterates from 0 to the end of matrix2's column.
*/
var multiply = function (mat1, mat2) {
  if (
    mat1.length === 0 ||
    mat2.length === 0 ||
    mat1[0].length !== mat2.length
  ) {
    return [];
  }
  let m = mat1.length,
    k = mat1[0].length,
    n = mat2[0].length;
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (mat1[i][j] === 0) continue;
      for (let z = 0; z < n; z++) {
        res[i][z] += mat1[i][j] * mat2[j][z];
      }
    }
  }
  return res;
  // T.C: O(m*k + nonZeroValues(A) * n)
  // S.C: O(m*n)
};
