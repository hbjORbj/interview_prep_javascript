/*
Root of Number
Many times, we need to re-implement basic functions without using any standard library functions already implemented.

For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, 

and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), 

there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.
*/

function root(x, n) {
    let low = 0, high = x;
    let possibleRes = 0;
    // you need an accurance of 0.001
    // while high - low > 0.001
    // 0.0005
    while (high - low > 0.0005) {
      let mid = (low + high) / 2;
      possibleRes = mid.toFixed(5);
      let diff = Math.abs((possibleRes**n) - x);
      if (diff < 0.000000000001) {
        break;
      }
      if (possibleRes ** n > x) {
        high = mid;
      } else if (possibleRes ** n < x) {
        low = mid;
      }
      // you need to find y
      // comparing y to x ** (1 / n)
      // is equivalent to comparing y ** n to x
    }
    // low, high
    return possibleRes;
  }

    /*
    function root(x, n):
    if (x == 0):
        return 0

    lowerBound = 0
    upperBound = max(1, x)
    approxRoot = (upperBound + lowerBound) / 2

    while (approxRoot - lowerBound >= 0.001):
        if (power(approxRoot, n) > x):
            upperBound = approxRoot
        else if (power(approxRoot, n) < x):
            lowerBound = approxRoot
        else
            break

        approxRoot = (upperBound + lowerBound) / 2

    return approxRoot
  
  */