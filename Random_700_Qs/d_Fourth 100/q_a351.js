/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:
- Could you solve this problem without using the library's sort function?
- Could you come up with a one-pass algorithm using only O(1) constant space?
*/

var sortColors = function(nums) {
    // put 0s at the front and 2s at the back
    // then, all 1s will be naturally put in the middle
    let idxZero = 0, idxTwo = nums.length - 1;
    for (let i = 0; i <= idxTwo; i++) {
        if (nums[i] == 0) {
            [nums[idxZero], nums[i]] = [nums[i], nums[idxZero]];
            idxZero++;
        } else if (nums[i] == 2) {
            [nums[i], nums[idxTwo]] = [nums[idxTwo], nums[i]];
            idxTwo--;
            i--; // want to check the swapped element
        }
    }
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
