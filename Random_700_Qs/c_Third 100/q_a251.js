/*
Given an array A of distinct integers sorted in ascending order, 

return the smallest index i that satisfies A[i] == i. 

Return -1 if no such i exists.
*/

function fixedPoint(A) {
    let left = 0, right = A.length - 1, mid;
    let res = Infinity;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (A[mid] == mid) {
            res = Math.min(res, mid);
            right = mid-1; // to check if there is a smaller fixed point
        }
        else if (A[mid] < mid) { // there is no fixed point in left half (A[mid] being less than mid means A[0..mid-1] are all less than their corresponding index)
            left = mid + 1;
        } else { // there is no fixed point in right half (A[mid] being greater than mid means A[mid+1..] are all greater than their corresponding index)
            right = mid - 1;
        }
    }
    return res == Infinity ? -1 : res;
}
// Time Complexity: O(log(n))
// Space Complexity: O(1)

console.log(fixedPoint([-10,-5,0,3,7])); // => 3
console.log(fixedPoint([0,2,5,8,17])); // => 0
console.log(fixedPoint([-10,-5,3,4,7,9])); // => -1
console.log(fixedPoint([-10,-9,-8,3,4,5])); // => 3
console.log(fixedPoint([-10,-9,-8,3,4,5,6])); // => 3
console.log(fixedPoint([-10,-9,-8,3,4,5,6,7])); // => 3
console.log(fixedPoint([-1,0,1,3,4,5,6,7])); // => 3
console.log(fixedPoint([-2,-1,0,3,4,5,6,7])); // => 3


