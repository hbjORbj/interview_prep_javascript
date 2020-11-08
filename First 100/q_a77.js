/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

Qs:
1.
*/
var merge = function(nums1, m, nums2, n) {
    if (n == 0) return; // no need to do change anything
    
    let idx1 = m-1, idx2 = n-1, end = m+n-1;
    while (idx2 >= 0) {
        if (nums1[idx1] > nums2[idx2]) {
            // nums1[idx1] is greater than nums2[idx2]
            nums1[end] = nums1[idx1];
            idx1--;
        } else { 
            // 1st case: nums1[idx1] is undefined
            // 2nd case: nums2[idx2] is greater than nums1[idx1]
            // 3rd case: nums2[idx2] is equal to nums1[idx1]
            nums1[end] = nums2[idx2];
            idx2--;
        }
        end--;
    }
};

/*
Test Cases:
[1,2,3,0,0,0], m = 3, [2,5,6], n = 2    =>  [1,2,2,3,5,6]

Time Complexity: O(m+n)
Space Complexity: O(1)
*/ 