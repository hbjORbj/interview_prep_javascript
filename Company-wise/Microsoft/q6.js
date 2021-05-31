/*
Find N Unique Integers Sum up to Zero

Given an integer n, return any array containing n unique integers such that they add up to 0.
*/

/*
We can simply add 1 to n-1 and keep track of this array sum and add the negation of that.
*/
var sumZero = function (n) {
  let sum = 0,
    res = [];
  for (let i = 1; i < n; i++) {
    res.push(i);
    sum += i;
  }
  res.push(-sum);
  return res;
  // T.C: O(N)
  // S.C: O(N)
};

/*
We add pairs of numbers (num, -num) starting from 1 and ending at floor(n/2).
If n is odd, we add 0.
*/
var sumZero = function (n) {
  let res = n % 2 === 0 ? [] : [0];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(i, -i);
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
