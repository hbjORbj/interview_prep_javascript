/*
Find the square root of an integer X. For example, squareRoot(4) = 2. 

If X is not a perfect square, find the integer floor of the square root.

Qs:
1. What to return if X is 0?
- Return 0:
*/
function findSqrt(X) {
    if (X <= 1) return X;
    let left = 1, right = X, mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (mid**2 > X) right = mid - 1;
        else if (mid**2 < X) {
            if ((mid+1)**2 > X) return mid; // X is not a perfect square
            left = mid + 1;
        }
        else return mid;
    }
    return -1; // Should not happen
} 
/*
Test Cases:
0 => 0
1 => 1
2 => 1
3 => 1
4 => 2
5 => 2
6 => 2
9 => 3

Time Complexity: O(log(n))
Space Complexity: O(1)
*/