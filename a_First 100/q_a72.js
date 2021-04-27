/*
Find the square root of an integer X. For example, squareRoot(4) = 2. 

If X is not a perfect square, find the integer floor of the square root.

Qs:
1. What to return if X is 0?
- Return 0.
2. What is X is negative?
- Return null;
*/
var mySqrt = function(X) {
    if (X <= 1) return X;
    let low = 0, high = X / 2;
    let mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (mid** 2 > X) {
            high = mid - 1;
        } else if (mid** 2 < X) {
            if ((mid+1)**2 > X) {
                return mid;
            }
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1; // Should never be reached
    // T.C: O(log(N))
    // S.C: O(1)
};
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