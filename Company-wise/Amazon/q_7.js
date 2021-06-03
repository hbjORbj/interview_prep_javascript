/*
Number of Dice Rolls With Target Sum

You have d dice and each die has f faces numbered 1, 2, ..., f.

Return the number of possible ways (out of fd total ways) modulo 109 + 7 to roll

the dice so the sum of the face-up numbers equals target.
*/

var numRollsToTarget = function (d, f, target) {
  return dfs(d, f, target);
  // T.C: O(d*f)
  // S.C: O(d*f)
};

// d: dices remaining
// f: possible outcome of a roll
function dfs(d, f, target, memo = new Map()) {
  if (d === 0 && target === 0) {
    return 1;
  }
  if (d === 0 || target <= 0) {
    return 0;
  }
  if (memo.has(`${d}-${target}`)) {
    return memo.get(`${d}-${target}`);
  }
  let count = 0,
    M = Math.pow(10, 9) + 7;
  for (let i = 1; i <= f; i++) {
    count = (count + dfs(d - 1, f, target - i, memo)) % M;
  }
  memo.set(`${d}-${target}`, count);
  return count;
}
