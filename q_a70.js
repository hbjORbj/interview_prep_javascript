/*
Qs:
1. Does the input array contain duplicates?
- No.
2. What to return if there are multiple minimums?
- The first one.
3. How to return the output?
- The index.
4. What to return if the input array is empty?
- Return null
*/
function minimumInCyclicalArray(nums) {
    if (nums.length == 0) return null;
    let left = 0, right = nums.length-1, mid;
    while (left <= right) {
        mid = left + Math.floor((right-left) / 2);
        if (nums[mid] > nums[right]) left = mid+1;
        else {
            if (nums[mid-1] > nums[mid] || mid == 0) break;
            else right = mid-1;
        }
    }
    return mid;
}
/*
Test Cases:
[7,8,9,1,2,3] => 3
[] => null
[1,2,3] => 0

Idea:
Cyclically sorted array has two partitions.
The first subarray and the second subarray. They are both sorted.
All elements in the first subarray are greater than all elements in the second subarray.
So, to find the minimum element, we need to find the first element in the second subarray.
We can find the second subarray through binary search.
If the middle value is greater than the last element of array, we are in the first subarray, so we search the right half.
If the middle value is less than the last element of array, we are in the second subarray, so we check if this is the first element
of second subarray by comparing it with the previous value. If the previous value is greater, this is the first element. Else, we search the left half
because this is not the first element.

Time Complexity: O(log(n))
Space Complexity: O(1)

* Keep in mind that this algorithm will not work if duplicates are allowed. 
With duplicates, you can have a situation like this: A = [1,1,1,0,1,1]. It is difficult to divide the input
into halves. So you can not do it in O(log(n)) time. With duplicates, you will have to go
through the entire array and that will take O(n) time in the worst case.
*/