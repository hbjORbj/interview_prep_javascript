/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.
*/

var minDominoRotations = function(A, B) {
    if (A.length !== B.length) return -1;
    let m = new Map();
    // (key, value) in m represents (num, availability of num)
    for (let i = 0; i < A.length; i++) {
        if (A[i] == B[i]) { // for two same numbers at same index, availability is still 1
            m.set(A[i], m.get(A[i]) + 1 || 1);
        } else {
            m.set(A[i], m.get(A[i]) + 1 || 1);
            m.set(B[i], m.get(B[i]) + 1 || 1);
        }
    }
    let target = null; // there can be two numbers with availability at most but the minimum 
                       // number of rotations required will be the same so there is no need to iterate through both
    for (let [num, freq] of m) {
        if (freq >= A.length) target = num; // availability must be equal to or greater than length of array
    }
    if (target == null) return -1;
    let rotateA = 0, rotateB = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== target) rotateA++;
        if (B[i] !== target) rotateB++
    }
    
    return Math.min(rotateA, rotateB);
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};