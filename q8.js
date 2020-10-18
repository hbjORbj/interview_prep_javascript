/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

function removeDuplicates(nums) {
    if (!nums.length) return 0;
    let cur = nums[0], len = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== cur) {
            cur = nums[i];
            nums[len++] = cur;
        }
    }
    return len;
}

/*
Idea:
1. Loop over the array and have a counter that can also play as a pointer.
2. Every time I find a different element in the array, place it in the index the counter is pointing to, change the 
current element to this new element and increment the counter.
3. Return the counter.

Test Cases: [1,1,1,3,3,3,5,6,7] => 5 ([1,3,5,6,7])

Time Complexity: O(n)
Space Complexity: O(1)
*/