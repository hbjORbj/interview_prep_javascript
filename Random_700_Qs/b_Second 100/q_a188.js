/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Qs:
1. Are there duplicates?
- Yes.
2. Are there negative integers?
- Yes.
*/

var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a);
    return nums[k-1];
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(1)
};