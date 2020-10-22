/*
Given an array nums with n objects colored red, white, or blue, 

sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Questions to ask:
1. What is there is another color?
- Throw an error
2. If the input array is empty, should I leave it unchanged?
- Yes
*/

var sortColors = function(nums) {
    let lowerBoundary = 0, upperBoundary = nums.length-1;
    for (let i = 0; i <= upperBoundary; i++) {
        // upperBoundary represents the index where the next 2 "will" be placed at
        // so at this index, there might be a 1 which we need to move to the beginning
        // so we should include this index in our range!
        if (nums[i] == 0) {
            [nums[i], nums[lowerBoundary]] = [nums[lowerBoundary], nums[i]];
            lowerBoundary++;
        } else if (nums[i] == 2) {
            [nums[i], nums[upperBoundary]] = [nums[upperBoundary], nums[i]];
            upperBoundary--;
            i--;
        } else if (nums[i] == 1) continue;
        else throw new Error('Different Color');
    }
};

/*
* Same idea as in the Dutch National Flag problem.

Test Cases:
[0,0,0] => [0,0,0]
[2,1,0] => [0,1,2]
[] => []
[1] => [1]
[1,2] => [1,2]

Time Complexity: O(n)
Space Complexity: O(1)

Category: Two Pointer, Partitioning an array
*/