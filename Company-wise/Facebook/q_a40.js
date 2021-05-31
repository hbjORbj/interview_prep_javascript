/*
Sqrt(x)

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/

/*
sqrt(x) = a

We should find a and we know that a * a = x.
We will use binary search with low=0 and high=x.
mid will be a candidate for a. 
If mid * mid > x
    move left
else if mid * mid < x
    check if mid+1 * mid+1 > x;
    if so, mid is answer so break
    else move right
else 
    mid is answer so break

return mid
*/
var mySqrt = function (x) {
  let low = 0,
    high = x,
    mid = 0;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (mid * mid > x) {
      high = mid - 1;
    } else if (mid * mid < x) {
      if ((mid + 1) * (mid + 1) > x) break;
      else low = mid + 1;
    } else {
      break;
    }
  }
  return mid;
  // T.C: O(log(N))
  // S.C: O(1)
};
