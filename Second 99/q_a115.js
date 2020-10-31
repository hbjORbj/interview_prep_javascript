/*
Implement a selection sort.
*/

function selectionSort(A) {
    let swapIdx = 0; // represents the index where the next smallest number will go into
    while (swapIdx < A.length) { // runs n times always
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

console.log(selectionSort([4,1,9,2]));
console.log(selectionSort([2,-1,3,5]));
console.log(selectionSort([2,-1,9,-1,-2,-3,5]));
console.log(selectionSort([]));
/*
Test Cases:
[4,1,9,2] => [1,2,4,9]
[2,-1,3,5] => [-1,2,3,5]
[2,-1,9,-1,-2,-3,5] => [-3,-2,-1,-1,2,5,9]
[] => []

Time Complexity: O(n^2)
Space Complexity: O(1)
*/  