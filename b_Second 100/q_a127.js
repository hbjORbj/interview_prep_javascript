/*
 You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. 
 
 Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. 

If it does not exist, output -1 for this number. 
*/

var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(num => {
        for (let i = nums2.indexOf(num); i < nums2.length; i++) {
            if (nums2[i] > num) return nums2[i];
        }
        return -1; // no number to its right in nums2 is greater than the current number
    });
    // Time Complexity: O(m*n)
    // Space Compleity: O(1)
}

var nextGreaterElement = function(nums1, nums2) {
    let m = new Map(), stack = [];
    // (x,y) in m is 
    // (num, first num greater than num in the right)
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length-1] < nums2[i]) {
            m.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
        // stack contains numbers who are looking for greater number in its right
        // numbers that found the greater number leave the stack
    }
    return nums1.map(num => {
        if (m.has(num)) return m.get(num);
        else return -1;
    });
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};