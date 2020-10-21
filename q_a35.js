/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/
function findDisappearedNumbers(nums) {
    let disappeared = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num-1;
        nums[idx] = nums[idx] < 0 ? nums[idx] : -nums[idx];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) disappeared.push(i+1);
    }
    return disappeared;
}

/*
Test Cases: [3,3,1,2,5,5,6] => [4,7]

Idea:
1. Initialise a return array, "disappeared".
2. Loop over every number in the input array, and for each calculate its corresponding index if the array were to be a sorted array. For example, index 0 for number 1. 
Then, negate the number so that we know which numbers exist in the input array. If it is already negative, do not double-negate it.
3. Perform a new for loop to figure out which indices have not turned negative, and push their corresponding numbers to the return array. These numbers are not the current numbers at the indices. 
They are the numbers that are supposed to be at the indices if the array were to be a sorted array.

Time Complexity: O(n)
Space Complexity: O(1)
*/
