/*
You have a traditional 6-faced dice, and you rolled it M + N times. 

The numbers from rolls of M times are in A and the numbers from rolls of N times are in B. 

You want each array to have a common sum. 

You can modify the arrays so that their sums are equal but you should use the minimum number of turns. 

Through a turn, you can change a value from an array into any value between 1 and 6. 

You cannot delete a value or make it 0 or negative.

A's length and B'length can be different. If it is impossible to make both arrays sum to a common sum, return -1.

ex) (A = [1,4,3], B = [6,6,6]) => 2 (turns)
*/

function minTurns(A, B) {
    let start, end;
    if (A.length > B.length) { // lower boundary is longer array's min sum
        start = A.length * 1; // upper boundary is shorter array's max sum
        end = B.length * 6;
    } else {
        start = B.length * 1;
        end = A.length * 6;
    }
    if (start > end) return -1; // Impossible to make both arrays have a common sum

    let sumA = A.reduce((acc,cur) => acc+cur);
    let sumB = B.reduce((acc,cur) => acc+cur);
    let sortedA = A.sort((a,b) => a-b);
    let sortedB = B.sort((a,b) => a-b);
    let minTurns = Infinity;

    for (let possibleSum = start; possibleSum <= end; possibleSum++) {
        let turnsA = getTurns(sortedA,sumA,possibleSum);
        let turnsB = getTurns(sortedB,sumB,possibleSum);
        minTurns = Math.min(minTurns, turnsA + turnsB);
    }
    return minTurns;
}

function getTurns(arr, curSum, targetSum) {
    let turns = 0, l = 0, r = arr.length-1;
    while (curSum !== targetSum) {
        if (targetSum > curSum) { // trying to make our sum greater so need to start from smallest
            curSum += Math.min(6-arr[l], targetSum-curSum);
            l++;
        } else { // trying to make our sum smaller so need to start from greatest
            curSum -= Math.min(arr[r]-1, curSum-targetSum);
            r--;
        }
        turns++;
    }
    return turns;
}

// Time Complexity: O(M^2) + O(N^2)
// Space Complexity: O(M) + O(N)

console.log(minTurns([1,4,3],[6,6,6]));
console.log(minTurns([1],[6,2,1]));
console.log(minTurns([1,6,4],[6,2,1]));
console.log(minTurns([2,4,5],[6]));
console.log(minTurns([1],[6,3,3,3,3,1,1,1]));
console.log(minTurns([1,2,3,4,5,6], [1,2,3,4,5,6]));
console.log(minTurns([1,2,3], [4,5,6]));
console.log(minTurns([3,3], [4,5,6,4]));

// [1,4,3],[6,6,6] => 2
// [1],[6,2,1] => 2
// [1,6,4],[6,2,1] => 1
// [2,4,5],[6] => 2
// [1],[6,3,3,3,3,1,1,1] => -1
// [1,2,3,4,5,6], [1,2,3,4,5,6] => 0
// [1,2,3], [4,5,6] => 2
// [3,3], [4,5,6,4] => 4