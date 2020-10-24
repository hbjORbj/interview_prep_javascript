/*
Given an array of integers and an integer k, 
you need to find the total number of continuous subarrays whose sum equals to k.

Qs:
1. Can the input array contain duplicates?
- Yes.
2. Can the input array contain negative integers?
- Yes.
3. Can a subarray of length 1 considered be an answer?
- Yes.
*/
function subarraySum(nums, k) {
    let prefixSum = 0, m = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum == k) count++;
        if (m.has(prefixSum - k)) count += m.get(prefixSum-k);
        m.set(prefixSum, m.get(prefixSum)+1 || 1);
    }
    return count;  
}

/*
Test Cases:
[1,1,0,2,3], 3 => 2
[1, 0, -1], 3 => 0
[], 3 => 0

Idea:
I will use prefix sum (or cumulative sum) to approach this problem.
I will loop through the array and for every number I will assign the prefix sum to a map.
Map's value will represent the number of frequencies of prefix sum since there can be multiple answers.

There are two cases for answers:
1. If we encounter sum k at i, [0..i] is one answer.
2. If current prefix sum - k exists at some index p, the subarray [p+1...curIdx] is one answer because it means that the sum increased by k from p to curIdx.
I will count all these answers. 

Time Complexity: O(n)
Space Complexity: O(n)
*/