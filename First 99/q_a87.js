/*
Given an array of integers and a value K find a subsequence having maximum sum under K.

Return the maximum Sum.

Qs: 
1. What to return if there is possible subsequence whose sum is under k?
- Return 0.
2. Is the array sorted? Has negatives? Duplicates?
- Not sorted. Yes, duplicates and negatives possible.
*/
function maxSubsequenceSum (nums, k) {
    let possibleSums = [];
    possibleSums.push(0);
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let prevPossibleSums = new Set(possibleSums);
        for (let num of prevPossibleSums) {
            let sum = num + cur;
            possibleSums.push(sum);
            if (sum <= k) {
                max = Math.max(max, sum);
            }
        }
    }
    return max == -Infinity ? 0 : max;
}

console.log(maxSubsequenceSum([1,2,3,4,5,6,7,15], 15));
console.log(maxSubsequenceSum([3,0,1], 2));
console.log(maxSubsequenceSum([2,-5,10], 1));
console.log(maxSubsequenceSum([2,3,5], 1));
console.log(maxSubsequenceSum([3,4,6,7,3,21,4,8,5,3,2,6], 55))
console.log(maxSubsequenceSum([1,2,3,4,5,6,7,16], 15))
console.log(maxSubsequenceSum([1, 1, 1, 1, 1], 0))
console.log(maxSubsequenceSum([101, -1, 1], 100))

/*

Test Cases:
[1,2,3,4,5,6,7,15], 15 => 15
[3,0,1], 2 => 1
[2,-5,10], 1 => -3
[2,3,5], 1 => 0

Time Complexity: O(n^2)
Space Complexity: O(n)

Category: DP
*/
