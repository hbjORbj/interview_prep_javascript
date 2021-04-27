/*
< Search Array of Unknown length >
You are given an array, but you don't know the length. 
Write a program to find a target element in the array.

Qs:
1. Is the input array sorted?
- Yes.
2. What happens if we try to access an index that is out of bounds?
- An exception is thrown.
3. How do you want the output?
- Index.
4. What to return if the target is not found?
- Return -1.
*/

function findTarget(nums, target) {
    if (nums.length == 0 || nums == null) return -1;
    let high = 1, lastIndex = -1;
    while (true) {
        try {
            let temp = nums[high];
        } catch (error) {
            lastIndex = binarySearchForLastIndex(nums, high/2, high);
            break;
        }
        high *= 2;
    }
    let left = 0, right = lastIndex, mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) right = mid - 1;
        else if (nums[mid] < target) left = mid + 1;
        else return mid;
    }
    return -1;
}

function binarySearchForLastIndex(nums, low, high) {
    while (low <= high) {
        let mid = low + Math.floor((high-low));
        try {
            let temp = nums[mid];
        } catch(error) {
            // mid is out of bounds, go to lower half
            high = mid - 1;
            continue;
        }
        try {
            let temp = nums[mid+1];
        } catch(error) {
            // mid is in array but mid+1 is out of bounds, so mid is the last element
            return mid;
        }
        // both mid and mid + 1 are inside array, mid is not last index.
        low = mid + 1;
    }
    return -1; // this subarray does not have end of the array
}

/*
Test Cases:
Array, 7 => index of 7
Empty Array => -1

Idea:
Start from index 1 and keep doubling it until the program throws an exception.
If an exception is thrown at index i, we only need to search from i/2 to i. 

Time Complexity: O(log(n))
Space Complexity: O(1)
*/