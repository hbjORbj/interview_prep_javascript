/*
Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 

such that each number is the sum of the two preceding ones, starting from 0 and 1. 

That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

/*
Recursion, Memoization (Bottom-up approach)

If n is zero or one, return 0 and 1, respectively (base cases)
Else, return fib(n-1) + fib(n-2)

For more optimised solution, we create a Hash table or Array to keep track of results that have already been computed and pass it to fib() function
*/
var fib = function (n, memo = new Map()) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo.has(n)) {
    return memo.get(n);
  }
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, res);
  return res;
  // T.C: O(N)
  // S.C: O(N)
};

var fib = function (n, memo = new Array()) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
