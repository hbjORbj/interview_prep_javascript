/*
Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.
*/

var minIncrementForUnique = function(A) {
    A.sort((a,b) => a-b);
    let moves = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] >= A[i]) {
            let increment = A[i-1] - A[i] + 1;
            A[i] += increment;
            moves += increment;
        }
    }
    return moves;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)
};

var minIncrementForUnique = function(A) {
    let count = [], moves = 0;
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        if (count[num]) count[num] += 1; 
        else count[num] = 1;
    }
    
    for (let i = 0; i < count.length; i++) {
        let freq = count[i];
        if (freq >= 2) {
            count[i] = 1;
            if (count[i+1]) count[i+1] += freq-1;
            else count[i+1] = freq-1;
            moves += freq-1;
        }
    }
    return moves;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

/*
Test Cases:

[1,2,2] => 1
[3,2,7,1,2,1] => 6
*/

