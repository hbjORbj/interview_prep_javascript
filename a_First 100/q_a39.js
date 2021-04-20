/*
You are given an array of integers and a pivot. Rearrange the array in the following order:
[all elements less than pivot, elements equal to pivot, elements greater than pivot]

Questions to ask:
1. Can the input array contain negative integers?
- Yes
2. If the input array is already in the order, should I leave it unchanged?
- Yes
3. If the input array is empty, should I leave it unchanged?
- Yes
5. Do the numbers need to be in the original order after re-arrangement?
- No
*/

function dutchNationalFlag(nums, pivot) {
    let lowerBoundary = 0, upperBoundary = nums.length-1;
    for (let i = 0; i <= upperBoundary; i++) {
        // upperBoundary represents the index where the next element greater than pivot "will" be placed at
        // so currently at this index, there might be a number less than pivot which we need to move to the beginning
        // so we should include this in our range!
        if (nums[i] < pivot) {
            [nums[i], nums[lowerBoundary]] = [nums[lowerBoundary], nums[i]];
            lowerBoundary++;
        } else if (nums[i] > pivot) {
            [nums[i], nums[upperBoundary]] = [nums[upperBoundary], nums[i]];
            upperBoundary--;
            i--;
        }
    }
    return nums;
}

/*asdfasdfadffasdff
Test Cases:
( [3,1,5,0,2,4,3], 3 ) => [0,1,2,3,3,4,5] or [1,2,0,3,3,4,5] and many others..
( [], 3 ) => []
( [3], 3 ) => [3]

Idea:
1. We need to partition the array into three parts: numbers less than pivot, numbers equal to pivot and
numbers greater than pivot. I will create two variables. One is the boundary between the first subarray and the second subarray, and
the other is the boundary between the second subarry and the third subarray.
lowerBoundary is initialised to the first index (0) because this is the index the next number less than pivot will be placed at.
upperBoundary is initialised to the last index (nums.length-1) because this is the index the next number greater than pivot will be placed at.
2. I will start looping over the array from the beginning until the upperBoundary.
For every number less than pivot, I will swap it with the element at lowerBoundary
and increment lowerBoundary. This allows me to put all numbers less than pivot to the beginning.
For every number greater than pivot, I will swap it with the element at upperBoundary and  decrement upperBoundary.
This allows me to put all numbers greater than pivot to the end. For numbers equal to pivot, we do not need to do anything because they will be
automatically placed in the middle.

Time Complexity: O(n)
Space Complexity: O(1)

Category: Two Pointer, Partitioning an array
*/