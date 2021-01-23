/*
Given two arrays, write a function to compute their intersection.
- Each element in the result must be unique.
- The result can be in any order.
*/

var intersection = function(nums1, nums2) {
    let m = new Map(), res = [];
    for (let i = 0; i < nums1.length; i++) {
        m.set(nums1[i], 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (m.get(nums2[i]) > 0) {
            res.push(nums2[i]);
            m.set(nums2[i], 0);
        }
    }
    return res;
    // Time Complexity: O(m + n)
    // Space Complexity: O(max(m, n))
};

console.log(intersection([1,2,3,4], [4]))