/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/
function canJump(nums) {
    if (!nums) return false;
    let validIdx = nums.length-1;
    for (let i = nums.length-2; i >= 0; i--) {
        if (nums[i] + i >= validIdx) validIdx = i;
    }
    return validIdx == 0;
}
/*
Test Cases: [0,1,1,4] => false

Idea:
1. Initialise a variable called validIndex to the last index of the input array.
2. Start looping over the array from the last index-1. 
If the sum of the maximum jump length at this index and the index is greater than or equal to the validIndex, 
we update the validIndex to this index, because it means that we can reach the end of the array if we can reach this index.
Else, continue.
3. When we reach the first index of the array and the validIndex is equal to zero, we return true. Else, return false.

Time Complexity: O(n)
Space Complexity: O(1)
*/