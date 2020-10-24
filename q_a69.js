/*
Given a list of non-negative numbers and a target integer k, 
write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, 
that is, sums up to n*k where n is also an integer.
*/

var checkSubarraySum = function(nums, k) {    
    let m = new Map();
    let prefixSum = 0;
    m.set(prefixSum, -1); // to consider a subarray starting from index 0
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (k != 0) prefixSum = prefixSum % k;
        if (m.has(prefixSum)) {
            if (i-m.get(prefixSum) >= 2) return true;
        }
        else m.set(prefixSum, i); // if the prefix sum already exists in the map, we do not update the index because we want to have lengths as big as possible here
    }
    return false;
};

/*
Test Cases:
[] => false
[1,3,5], 3 => false
[2,3,3,4], 6 => true

ex) 
Input: [23,2,4,6,7]
Corresponding Prefix sum: [5, 1, 5, 5, 6]
* If prefix sum at index i already exists at some index p, subarray [p+1..i] has a sum
that is a multiple of k beacuse we have the same prefix sum at either index.

Time Complexity: O(n)
Space Complexity: O(n)
*/