/*
Given an array of integers nums and an integer k, 

return the total number of continuous subarrays whose sum equals to k.
*/

function subarraySum(nums, k) {
    let prefixSum = 0, total = 0;
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum == k) total++;
        if (m.has(prefixSum-k)) total += m.get(prefixSum-k);
        m.set(prefixSum, m.get(prefixSum)+1 || 1);
    }
    return total;
    // key-value pair in m = (prefixSum, number of subarrays that have this prefix sum)
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

console.log(subarraySum([0,0,0,0],0));
console.log(subarraySum([-3,1,2,0,3,2],5));