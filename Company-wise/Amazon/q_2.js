/*
Permutation Sequence

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
*/

// First Solution
// Brute Force Backtracking
var getPermutation = function (n, k) {
  let res = "",
    visited = new Array(n + 1).fill(false);
  dfs("");
  return res;
  // T.C: O(N!)
  // S.C: O(N)
  function dfs(curPath) {
    if (curPath.length === n) {
      k--;
      if (k === 0) {
        res = curPath;
      }
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        dfs(curPath + i);
        visited[i] = false;
      }
      if (res !== "") return;
    }
  }
};

/*
Second Solution: Factorial

We will find each digit of the answer from the left-most digit.

Let's say n = the number of digits remaining to be figured out.
Basically, we are finding the block in which the digit we are looking for exists. And, the index of that block will give us the digit (index + 1 is the digit).
What do I mean by a block? That's where numbers with the same left-most digit exist.
Hence, at the start, we have n blocks. Then as we find digits, we have n-1 blocks, n-2 blocks, ... and so on.

Number of permutations per block = (n-1)! (because we fix one digit and other n-1 digits permute)
index of block = Ceil(k / Number of permutations per block) - 1

block index 0 represents number 1
block index 1 represents number 2 and so on.

After we find a digit, we should reduce k.
k -= (index of block) * Number of permutations per block, because that's how many elements we jump over.
As we find a digit, n decrements by 1 as well and hence we now have one less block.
*/
var getPermutation = function (n, k) {
  // factorial[i] is i!
  let factorial = new Array(n);
  // nums[i] is i+1
  let nums = new Array(n);
  factorial[0] = 1;
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
    nums[i - 1] = i;
  }
  nums[nums.length - 1] = n;
  let res = [];
  // i = the number of digits remaining to be figured out
  for (let i = n; i > 0; i--) {
    let idx = Math.ceil(k / factorial[i - 1]) - 1;
    // factorial[i-1] is the number of permutations per block
    // idx is the number of blocks before k-th permutation
    // hence idx * factorial[i-1] is the number of elements we jump over
    k -= idx * factorial[i - 1];
    res.push(nums[idx]);
    // we remove a found digit from array so that a digit doesn't repeat
    nums.splice(idx, 1);
  }
  return res.join("");
  // T.C: O(N^2)
  // S.C: O(N)
};
