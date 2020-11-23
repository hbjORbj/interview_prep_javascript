/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/

var nextPermutation = function(nums) {
    let pivotIdx = -1;
    for (let i = nums.length-1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) { // the array is in descending order
        nums.reverse();
        return;
    }
    for (let i = nums.length-1; i > pivotIdx; i--) {
        if (nums[pivotIdx] < nums[i]) {
            [nums[pivotIdx], nums[i]] = [nums[i], nums[pivotIdx]];
            break;
        }
    }
    // Now, we need to reverse the subarray after our pivotIdx.
    let left = pivotIdx + 1, right = nums.length-1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++, right--;
    }
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

// If the array is sorted in descending order, there is no next greater permutation.
// In this case, we can reverse the input and finish the program.