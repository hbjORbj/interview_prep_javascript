/*
You are given an array of integers.

Rearrange the array so that all zeros are at the beginning of the array.

Maintain the order of non-zeros.

Questions to ask:
1. What if there are no zeros?
- The array will be unchanged.
*/
function moveZerosToFront(nums) {
    let boundary = nums.length-1;
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] !== 0) {
            [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
            boundary--;
        }
    }
    return nums;
}
/*
Test Cases: 
Regular case [0,1,-4,5,9,0,0] => [0,0,0,_,_,_,_]
Edge case [] => []
Base Case [0] => [0]
Base Case [1] => [1]

Idea:
1. I will partition this array into two parts: zeros and non-zeros.
The array with zeros will be the first subarray and the second will be the one with non-zeros. 
2. Create a variable to track the boundary between the first subarray and second subarray. 
This is the index the next non-zero will be placed at.
So, we initialise it to the last index of the array (nums.length-1).
3. Loop over every element of the array from the back, and every time we encounter a non-zero, we put it in the second subarray,
by swapping with the element at the "boundary" index, and decrement "boundary" variable.
4. Return the array.
*/