/*
You are given a sorted array A and a target T. Return the index where it would be placed if inserted in order.

Qs to ask:
1. If the target already exists in the array, should I add it after the existing one?
- Yes.
2. Can the input array have duplicates?
- Yes.
3. Can the input array contain negative numbers and can the target be negative?
- Yes.
4. If the input array is empty, what should I return?
- Return -1.

We can distill this problem into
"Given a sorted array A and a target T, find the first element larger than T."
*/

function findInsertIndex(A, T) {
    let left = 0, right = A.length-1, mid;
    while (left <= right) {
        mid = Math.floor((left+right) / 2);
        if (A[mid] <= T) {
            if (mid == A.length-1) return A.length; // means T is the greatest number in the array
            left = mid + 1;
        } else if (A[mid] > T) { 
            if (mid == 0) return mid; // means T is the smallest number in the array
            if (A[mid-1] <= T) return mid; // found the first element larger than T
            right = mid - 1;
        } 
    }
    return -1;
}
console.log(findInsertIndex([1,3,5,5,6], 4))
/*
Test Cases:
[1,3,5,5,6], 6 => 2
[1,3,5,5,6], 5 => 4
[], 5 => -1
[1], 1 => 1

We need to take care of the following edge cases:
1. If the input array is empty, return -1.
2. If all elements are greater than target, return 0.
3. If all elements are less than target, return A.length.
*/