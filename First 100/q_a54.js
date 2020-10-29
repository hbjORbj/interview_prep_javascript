/*
Given an array of positive integers, find a subarray that sums to a given number X.

1. What to do if the input array is empty?
- Return an empty array.
2. How to return the output?
- As an array of start index and end index.
3. What to do if there are multiple answers?
- Return the first one.
4. What to do if there is no answer?
- Return an empty array;
*/

function findSubarray(nums, X) {
    let start = 0, end = 0;
    let sum = 0;
    while (end < nums.length) {
        sum += nums[end];
        while (sum > X) {
            sum -= nums[start++];
        }
        if (sum == X) return [start, end];
        end++;
    }
    return [];
}

/*
Test Cases:
[], 2 => []
[1,-3,5,6], 2 => [1, 2]
[1, 1], 3 => [] 

Time Complexity: O(n)
Space Complexity: O(1)

Category: Two Pointer
*/