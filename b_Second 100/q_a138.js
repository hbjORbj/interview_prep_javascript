/*
Given an array of integers nums and an integer k, 

return all continuous subarrays whose sum equals to k.
*/

function subarraySum(nums, k) {
    let prefixSum = 0, res = [];
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum == k) res.push(nums.slice(0,i+1));
        if (m.has(prefixSum-k)) {
            for (let idx of m.get(prefixSum-k)) {
                res.push(nums.slice(idx+1, i+1));
            }
        }
        if (m.has(prefixSum)) m.set(prefixSum, [...m.get(prefixSum), i]);
        else m.set(prefixSum, [i]);
    }
    return res;
    // key-value pair in m = (prefixSum, number of subarrays that have this prefix sum)
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}

console.log(subarraySum([0,0,0,0],0));
console.log(subarraySum([-3,1,2,0,3,2],5));
console.log(subarraySum([],0));