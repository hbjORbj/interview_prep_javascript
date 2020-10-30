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
    let possibleSums = [];
    for (let i = start; i <= end; i++) {
        possibleSums.push(i);
    }

    if (possibleSums.length == 0) return -1; // Impossible to make both arrays have a common sum

    let sumA = A.reduce((acc,cur) => acc+cur);
    let sumB = B.reduce((acc,cur) => acc+cur);
    let minTurns = Infinity;
    let ascendingA = A.sort((a,b) => a-b), descendingA = A.sort((a,b) => b-a);
    let ascendingB = B.sort((a,b) => a-b), descendingB = B.sort((a,b) => b-a);

    for (let possibleSum of possibleSums) {
        let turnsA = sumA < possibleSum ? getTurns(ascendingA,sumA,possibleSum) : getTurns(descendingA,sumA,possibleSum);
        let turnsB = sumB < possibleSum ? getTurns(ascendingB,sumB,possibleSum) : getTurns(descendingB,sumB,possibleSum);
        minTurns = Math.min(minTurns, turnsA + turnsB);
    }
    return minTurns;
}

function getTurns(arr, curSum, targetSum) {
    let turns = 0, i = 0;
    while (curSum !== targetSum) {
        if (targetSum > curSum) { // trying to make our sum larger
            curSum += Math.min(targetSum-curSum, 6-arr[i]);
        } else { // trying to make our sum smaller
            curSum -= Math.min(curSum-targetSum, arr[i]-1);
        }
        turns++;
        i++;
    }
    return turns;
}

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