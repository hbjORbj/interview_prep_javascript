/*
Given a sorted array of Integers, find the target. 

If the target is not found, return the element closest to the target.

Qs:
1. How to return the output?
- Return its index.
2. Can the input array contain duplicates?
- Yes.
3. If there are duplicate targets, which should I return? 
- Return any of them.
4. What to return if the input array is empty?
- Return -1
5. What to return if there are two elements equally distant from target?
- Return any of them.
*/
function findClosest(nums, target) {
    if (nums.length == 0) return -1;
    let left = 0, right = nums.length-1, mid;
    let closest = null;
    while (left <= right) {
        mid = left + Math.floor((right-left) / 2);
        if (closest == null) closest = mid;
        if (Math.abs(nums[closest]-target) > Math.abs(nums[mid]-target)) closest = mid;
    
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return closest;
}
/*
Test Cases:
[], 1 => -1
[1,2,4,6,6,7], 6 => 3 or 4
[10, 20, 30, 40], 22 => 1

Idea:
Since the array is sorted, I will use binary search to find the target.
If the median is greater than target, we search the left half, 
if the median is less than target, we search the right half,
if the median is equal to target, we return the output.

Since there could be a case where the input array does not contain the target, I will keep a variable to
track of the closest element. This variable will be updated every time I find an element closer to the target.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/