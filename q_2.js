/*
Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing 
in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.
*/

function smallestLargerNumber(n) {
    let arr = n.toString().split(""), pivotIdx = -1;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i-1] < arr[i]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) return -1;

    let rSubarray = arr.slice(pivotIdx+1).sort((a,b) => a-b);
    for (let j = 0; j < rSubarray.length; j++) {
        if (rSubarray[j] > arr[pivotIdx]) {
            [arr[pivotIdx], rSubarray[j]] = [rSubarray[j], arr[pivotIdx]];
            break;
        }
    }
    for (let j = pivotIdx+1; j < arr.length; j++) arr[j] = rSubarray[j-pivotIdx-1];
    let res = Number(arr.join(""));
    return res <= 2**31-1 ? res : -1;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
}

/*
Test cases: 
12 => 21
3892 => 3928

Idea:
1. We loop over every digit from the last index and try to find two consecutive digits where nums[i-1] < nums[i]. 
Once we find this, we should find a digit just greater than the digit at nums[i-1]. We can do this by sorting the subarray
from index i and then pick the first digit greater than our digit at pivot index (i-1). We swap the two digits, and we 
go back to our old array and replace the elements after the pivot index with this sorted subarray.
2. Convert this array into an integer, check if is less than or equal to a positive 32-bit integer, if true return it, else return -1.

Category: Math
*/

// Without using sort()
var nextGreaterElement = function(n) {
    let arr = n.toString().split(""), pivotIdx = -1;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i-1] < arr[i]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) return -1;
    
    for (let j = arr.length-1; j >= pivotIdx; j--) {
        if (arr[pivotIdx] < arr[j]) {
            [arr[pivotIdx], arr[j]] = [arr[j], arr[pivotIdx]];
            break;
        }
    }
    let rSubarray = arr.slice(pivotIdx+1).reverse();    
    
    
    for (let j = pivotIdx+1; j < arr.length; j++) arr[j] = rSubarray[j-pivotIdx-1];
    let res = Number(arr.join(""));
    return res <= 2**31-1 ? res : -1;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};