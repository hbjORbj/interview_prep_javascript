/*
Given a circular array (the next element of the last element is the first element of the array), 

print the Next Greater Number for every element. 

The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, 

which means you could search circularly to find its next greater number. 

If it doesn't exist, output -1 for this number. 
*/

var nextGreaterElements = function(nums) {
    let stack = [], len = nums.length;
    let res = new Array(len);
    // stack stores numbers who are looking for greater numbers
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && stack[stack.length-1][0] < nums[i]) {
            res[stack.pop()[1]] = nums[i];
        }
        stack.push([nums[i], i]);
    }
    
    // No need to push numbers into stack in our second loop
    // because we've already scanned through the whole array once
    // If there is no greater number in this second pass, then there doesn't exist one,
    // because two scans in a circular array is equal to one full rotation
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && stack[stack.length-1][0] < nums[i]) {
            res[stack.pop()[1]] = nums[i];
        }
    }
    for (let [num, idx] of stack) {
        res[idx] = -1;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};