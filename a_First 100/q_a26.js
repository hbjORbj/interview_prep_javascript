/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?
*/

function findIndexPair(nums, target) {
    let l = 0, r = nums.length-1, mid = 0;
    let idx1, idx2;
    while (l <= r) {
        mid = Math.floor((l+r)/2);
        if (nums[mid] == target) {
            if (nums[mid-1] < nums[mid] || nums[mid-1] == undefined) {
                idx1 = mid;
                break;
            } else r = mid-1;
        } 
        else if (nums[mid] > target) r = mid-1;
        else l = mid+1;
    }
    
    l = 0, r = nums.length - 1, mid = 0; // Re-initialise
    
    while (l <= r) {
        mid = Math.floor((l+r) / 2);
        if (nums[mid] == target) {
            if (nums[mid+1] > nums[mid] || nums[mid+1] == undefined) {
                idx2 = mid;
                break;
            } else l = mid+1;
        } 
        else if (nums[mid] > target) r = mid-1;
        else l = mid+1;
    }
    return idx1 !== undefined && idx2 !== undefined ? [idx1, idx2] : [-1, -1];
};

/*
Test Cases: ( [1,2,3,3,3,3,3,4,5,5,8], 3 ) => [2,6] 

Idea:
1. Initialise two pointers l and r: l to 0 and r to nums.length-1, and two variables idx1 and idx2 to contain
the first index and the second index.
2. Use binary search to find the target value. I will use two while loops, one for finding the first index, the other
for finding the second index. 

* When finding the first index of target value, we need to add a condition that the previous value must be 
either less than the target value or undefined.

* When finding the second index of target value, we need to add a condition that the next value must be
either greater than the target value or undefined.

3. Finally, return [-1, -1] if either of idx1 and idx2 is still undefined.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/