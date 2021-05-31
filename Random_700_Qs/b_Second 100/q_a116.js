/*
Implement an insertion sort.
*/

function insertionSort1(A) { // sorts the array in ascending order
    for (let i = 1; i < A.length; i++) {
        if (A[0] < A[i]) {
            A.unshift(A.splice(i,1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (A[j] > A[i] && A[j-1] <= A[i]) {
                    A.splice(j, 0, A.splice(i,1)[0]);
                }
            }
        }
    }
    return A;
}
/*
Very efficient for almost sorted arrays or small data sets.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

// console.log(insertionSort1([4,2,1,9,2]));
// console.log(insertionSort1([2,-1,3,5]));
// console.log(insertionSort1([2,-1,9,-1,-2,-3,5]));
// console.log(insertionSort1([1]));
// console.log(insertionSort1([3,2]));
// console.log(insertionSort1([]));

function insertionSort2(A) { // sorts the array in descending order
    for (let i = 1; i < A.length; i++) {
        if (A[0] < A[i]) {
            A.unshift(A.splice(i,1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (A[j-1] > A[i] && A[j] <= A[i]) {
                    A.splice(j, 0, A.splice(i,1)[0]);
                }
            }
        }
    }
    return A;
}

console.log(insertionSort2([4,2,1,9,2]));
console.log(insertionSort2([2,-1,3,5]));
console.log(insertionSort2([2,-1,9,-1,-2,-3,5]));
console.log(insertionSort2([1]));
console.log(insertionSort2([2,3]));
console.log(insertionSort2([]));