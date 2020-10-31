/*
Implement a bubble sort.
*/
function bubbleSort(A) {
    while (true) { // runs n times in the worst case: ex) [6,5,4,3,2,1]
        let swap = 0;
        for (let i = 0; i < A.length-1; i++) {
            if (A[i] > A[i+1]) {
                [A[i], A[i+1]] = [A[i+1], A[i]];
                swap++;
            }
        }
        if (swap == 0) break;
    }
    return A;
}
console.log(bubbleSort([4,1,9,2]));
console.log(bubbleSort([2,-1,3,5]));

/*
Test Cases:
[4,1,9,2] => [1,2,4,9]
[2,-1,3,5] => [-1,2,3,5]
*/  