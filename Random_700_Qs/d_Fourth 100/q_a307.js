/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function(x) {
    let arr = x.toString().split("");
    let left = (arr[0] == '-') ? 1 : 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++, right--;
    }
    let res = Number(arr.join(""));
    return (res >= -(2**31) && res <= 2**31-1) ? res : 0;
    // Time Complexity: O(N) where N = length of input as string
    // Space Complexity: O(N) where N = length of input as string
};