/*
Given a positive 32-bit integer n, 

you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n 

and is greater in value than n. 

If no such positive 32-bit integer exists, you need to return -1.
*/

function nextGreaterElement(n) {
    let arr = n.toString().split("");
    let pivotIdx = -1;
    for (let i = arr.length-1; i > 0; i--) {
        if (arr[i-1] < arr[i]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) return -1; // there is no next greater number
    for (let i = arr.length-1; i > pivotIdx; i--) {
        if (arr[pivotIdx] < arr[i]) {
            [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
            break;
        }
    }
    let lSubarr = arr.slice(0, pivotIdx+1);
    let rSubarr = arr.slice(pivotIdx+1);
    rSubarr.reverse();
    let res = Number(lSubarr.join("") + rSubarr.join(""));
    return res <= 2**31-1 ? res : -1;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}