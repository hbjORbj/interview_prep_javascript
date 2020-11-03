/*
Given an array nums with n objects colored red, white, or blue, 

sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:
- Could you solve this problem without using the library's sort function?
- Could you come up with a one-pass algorithm using only O(1) constant space?
*/

var sortColors = function(nums) {
    let lowIdx = 0, highIdx = nums.length-1;
    // lowIdx represents where the next 0 will go
    // highIdx represents where the next 2 will go
    // 1 will be naturally gathered in the middle
    for (let i = 0; i <= highIdx; i++) {
        if (nums[i] == 0) {
            [nums[lowIdx], nums[i]] = [nums[i], nums[lowIdx]];
            lowIdx++;
        }
        else if (nums[i] == 2) {
            [nums[i], nums[highIdx]] = [nums[highIdx], nums[i]];
            highIdx--;
            i--; // we want to check this swapped element as well
        }
    }
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
console.log(sortColors([2,2,1,1,2,0,0]));