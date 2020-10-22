/*
Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.

Qs to ask:
1. Is an array with one zero also a valid answer?
- Yes.
2. What to return if the input array is empty?
- Return an empty array.
3. What to do if there is no answer?
- Return an empty array.
4. What to do if there are multiple answers?
- Return any one of them.
*/

function prefixSum(nums) {
    let sum = 0;
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum == 0) return nums.slice(0, i+1);
        if (m.has(sum)) return nums.slice(m.get(sum)+1, i+1);
        m.set(sum, i);
    }
    return [];
}

/*
Test Cases:
[] => []
[1,2,3] => []
[1,2,-2] => [2, -2]

Time Complexity: O(n)
Space Complexity: O(n)
*/