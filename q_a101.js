/*
Q: https://leetcode.com/discuss/interview-question/451422/microsoft-oa-2019-fair-indexes
*/

function fairIndexes(A, B) {
    let count = 0;

    let sumA = A.reduce((acc,cur) => acc+cur);
    let sumB = B.reduce((acc,cur) => acc+cur);
    
    let leftSumA = A[0], leftSumB = B[0];
    for (let i = 1; i < A.length; i++) {
        let rightSumA = sumA - leftSumA;
        let rightSumB = sumB - leftSumB;
        if (leftSumA == rightSumA && leftSumB == rightSumB && leftSumA == leftSumB) {
            count++;
        }
        leftSumA += A[i], leftSumB += B[i];
    }
    return count;
}


console.log(fairIndexes([4, -1, 0, 3], [-2, 5, 0, 3]));
console.log(fairIndexes([1, 4, 2, -2, 5], [7, -2, -2, 2, 5]));
console.log(fairIndexes([4, -1, 0, 3], [-2, 6, 0, 4]));
console.log(fairIndexes([3,2,6], [4,1,6]));

// [4, -1, 0, 3], [-2, 5, 0, 3] => 2
// [1, 4, 2, -2, 5], [7, -2, -2, 2, 5] => 2
// [4, -1, 0, 3], [-2, 6, 0, 4] => 0
// [3,2,6], [4,1,6] => 0
