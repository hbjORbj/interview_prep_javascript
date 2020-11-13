/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.
*/

var searchMatrix = function(matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    let left = 0, right = matrix.length - 1, mid;
    // perform a binary search on the first column array
    while (left < right-1) {
        mid = left + Math.floor((right - left) / 2);
        if (matrix[mid][0] == target) {
            return true;
        } else if (matrix[mid][0] < target) {
            left = mid;
        } else if (matrix[mid][0] > target) {
            right = mid - 1;
        }
    }
    
    return binarySearch(matrix[left], target) || binarySearch(matrix[right], target);
    // Time Complexity: O(log(m) + log(n)) = O(log(m*n))
    // Space Complexity: O(1)
};

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1, mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == target) return true;
        else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}