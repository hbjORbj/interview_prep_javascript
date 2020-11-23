/*
Implement a selection sort.
*/

function selectionSort1(A) { // sorts the array in ascending order
    let swapIdx = 0; // represents the index where the next smallest number will go into
    while (swapIdx < A.length) { // runs n times "always"
        let min = Infinity, minIdx = -1;
        for (let i = swapIdx; i < A.length; i++) {
            if (A[i] < min) {
                min = A[i];
                minIdx = i;
            }
        }
        [A[swapIdx], A[minIdx]] = [A[minIdx], A[swapIdx]];
        swapIdx++;
    }
    return A;
}

// console.log(selectionSort1([4,1,9,2]));
// console.log(selectionSort1([2,-1,3,5]));
// console.log(selectionSort1([2,-1,9,-1,-2,-3,5]));
// console.log(selectionSort1([]));
/*
Test Cases:
[4,1,9,2] => [1,2,4,9]
[2,-1,3,5] => [-1,2,3,5]
[2,-1,9,-1,-2,-3,5] => [-3,-2,-1,-1,2,5,9]
[] => []

We partition the array into two parts: sorted partition and unsorted partition.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/  


function selectionSort2(A) { // sorts the array in ascending order
    let swapIdx = 0;
    while (swapIdx < A.length) {
        let max = -Infinity, maxIdx = -1;
        for (let i = swapIdx; i < A.length; i++) {
            if (A[i] > max) {
                max = A[i];
                maxIdx = i;
            }
        }
        [A[maxIdx], A[swapIdx]] = [A[swapIdx], A[maxIdx]];
        swapIdx++;
    }
    return A;
}

console.log(selectionSort2([4,1,9,2]));
console.log(selectionSort2([2,-1,3,5]));
console.log(selectionSort2([2,-1,9,-1,-2,-3,5]));
console.log(selectionSort2([]));