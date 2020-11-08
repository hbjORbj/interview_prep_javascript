/*
Given two arrays, write a function to compute their intersection.

Each element in the result should appear as many times as it shows in both arrays.
*/

var intersect = function(nums1, nums2) {
    let m = new Map(), intersection = [];
    nums1.forEach(num => m.set(num, m.get(num)+1 || 1));
    for (let num of nums2) {
        if (m.has(num)) {
            intersection.push(num);
            m.set(num, m.get(num)-1);
            if (m.get(num) == 0) m.delete(num);
        }
    }
    return intersection;
    // Time Complexity: O(n+m)
    // Space Complexity: O(n)
} 

/*
Follow up: What if the given array is already sorted? How would you optimize your algorithm?

- If the given arrays are already sorted, we can implement this function with O(1) space complexity instead of O(n) space complexity.

var intersect = function(nums1, nums2) {
    let i = 0, j = 0;
    let intersection = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            intersection.push(nums1[i]);
            i++, j++;
        } else if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    return intersection;
};
*/

/*
Follow up: What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

- It is okay. We are assigning the numbers in arr1 to a map, not the numbers in arr2, so we do not need all elements of arr2 simultaneously. 
We will load them one by one and check if it exists in the map. 
If it does, we push the number to our return array and decrement the map's value. Else, continue.
*/