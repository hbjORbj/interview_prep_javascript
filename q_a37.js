/*
You are given an array of integers.

Rearrange the array so that all zeros are at the beginning of the array.
*/
function moveZerosToFront(nums) {
    let boundary = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
            boundary++;
        }
    }
    return nums;
}

/*
Test Cases: 

[0,1,-4,5,9,0,0] => [0,0,0,_,_,_,_]
[] => []
[0] => [0]
[1] => [1]

Idea:
1. I will partition this array into two parts: zeros and non-zeros.
The array with zeros will be the first subarray and the second will be the one with non-zeros. 
2. Create a variable called "boundary" and this will represent the index the next zero will be placed at.
So, we initialise it to 0.
3. Loop over every element of the array from the beginning, and every time we encounter a zero, we put it in the first subarray,
by swapping with the element at the "boundary" index, and increment "boundary" variable.
4. Return the array.

* This implementation does not maintain the order of the non-zeros.

Time Complexity: O(n)
Space Complexity: O(1)
*/