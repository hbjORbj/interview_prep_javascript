/*
Given two arrays, write a function to compute their intersection.

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

- What if the given array is already sorted? How would you optimize your algorithm?
- What if nums1's size is small compared to nums2's size? Which algorithm is better?
- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

// For the original question:
var intersect = function(nums1, nums2) {
    let m = new Map(), res = [];
    for (let i = 0; i < nums1.length; i++) {
        m.set(nums1[i], m.get(nums1[i]) + 1 || 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (m.get(nums2[i]) > 0) {
            res.push(nums2[i]);
            m.set(nums2[i], m.get(nums2[i]) -1);
        }
    }
    return res;
    // Time Complexity: O(m + n)
    // Space Complexity: O(max(m, n))
};

// For the follow-up question:
// What if the given array is already sorted? How would you optimize your algorithm?
var intersect = function(nums1, nums2) {
    let i = 0, j = 0, res = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) j++;
        else if (nums1[i] < nums2[j]) i++;
        else {
            res.push(nums1[i]);
            i++, j++;
        }
    }
    return res;
    // Time Complexity: O(min(m, n))
    // Space Complexity: O(1)
}

// - What if nums1's size is small compared to nums2's size? Which algorithm is better?
// The second algorithm is better because we only iterate until the end of either array. The first algorithm iterates m + n times.

// - What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// We do not need to load all elements into the memory at once. Rather, we can go through it one by one and check if the number exists in the map, which
// stores all elements of nums1.