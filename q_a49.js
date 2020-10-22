/*
Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to a number X.

Qs to ask:
1. Is X given as input?
- Yes.
2. If the input array is empty, should I return an empty array?
- Yes.
3. If there is no answer, should I return an empty array?
- Yes.
4. If there are multiple answers, which should I return?
- Any of them.
5. Can the answer be an array of length 1?
- Yes.
6. How to return the output?
- Return the whole subarray.
*/
function prefixSum2(nums, X) {
    let m = new Map();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum == X) return nums.slice(0, i+1);

        let diff = sum - X;
        if (m.has(diff)) {
            let idx = m.get(diff);
            return nums.slice(idx+1, i+1);
        } else {
            m.set(sum, i);
        }
    }
    return [];
}

/*
Test Cases:
[1,3,4,-1,2], 5 => [4, -1, 2]
[], 2 => []
[1], 1 => [1]
[1], 2 => []

Idea:
We loop through the array and we maintain the prefix sum at every point. If it is equal to X, we know that nums[0..i] is the answer.
If that is not the case, we want to check (current prefix sum - X) in the map. If this exists in the map, it means that the numbers
between them add up to X.

So, I will create a HashMap and for every number from the beginning, I will compute (current prefix sum - X). 
If this is found at some index p, then nums[p+1..i] is the answer. This is because from index p+1 to i, our sum increased by X.
Else, I will assign current prefix sum to the map with the number's index as its value and continue.

1. Loop through the array, and at each index i, we update prefix sum.
2. If we encounter sum X at i, we return [0..i] as answer.
3. We also keep a map of old prefix sums. If we find current prefix sum - X at index p, we return [p+1..i]. 
Else, assign current prefix sum to the map and continue.
*/