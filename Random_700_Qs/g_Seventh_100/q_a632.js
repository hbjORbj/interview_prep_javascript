/*
The Fibonacci sequence is defined as a sequence of integers starting with 1 and 1,
where each subsequent value is the sum of the preceding two. 

I.e.
f(0) = 1
f(1) = 1
f(n) = f(n-1) + f(n-2) where n >= 2

Write a program in a language of your choice to calculate the sum of the first 100 even-valued Fibonacci numbers
*/

function first100Even() {
  return recur(100);
}

// Returns the sum of the first n even-valued fibonacci numbers
function recur(n, i = 0, sum = 0, count = 0) {
  // base case: recursion stops if count hits n
  if (count === n) {
    return sum;
  }
  let fib = fibonacci(i);
  // we only want even fibonacci values
  if (fib % 2 === 0) {
    sum += fib;
    count += 1;
  }
  return recur(n, i + 1, sum, count);
  // T.C: O(maxI), where maxI = the last value of i
  // S.C: O(maxI)
}

// Returns the n-th fibonacci number
function fibonacci(n, memo = new Array()) {
  if (n <= 1) return 1;
  if (memo[n] !== undefined) return memo[n];
  let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = res;
  return res;
  // T.C: O(N), thanks to memoization, we compute n fibonacci numbers
  // and don't repeat the same computation as we return such values from memoization array
  // S.C: O(N), for memoization array
}

console.log(first100Even());
