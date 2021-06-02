/*
Jump Game

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/

// First Solution
var canJump = function (nums) {
  return jump(nums, 0);
  // T.C: Very bad.. please comment if you can suggest a proper figure
  // S.C: Very bad.. please comment if you can suggest a proper figure
};

const jump = (nums, idx, memo = new Map()) => {
  if (idx === nums.length - 1) {
    return true;
  }
  if (memo.has(idx)) {
    return memo.get(idx);
  }
  let possible = false;
  for (let i = 1; i <= nums[idx]; i++) {
    let res = jump(nums, idx + i, memo);
    if (res) {
      possible = true;
      break;
    }
  }
  memo.set(idx, possible);
  return possible;
};

// Second Solution
var canJump = function (nums) {
  // dp[i] tells whether or not it is possible to reach end of array from i
  let dp = new Array(nums.length).fill(false);
  dp[dp.length - 1] = true;
  for (let i = dp.length - 2; i >= 0; i--) {
    let jumps = nums[i],
      possible = false;
    for (let j = 1; j <= jumps; j++) {
      if (i + j >= dp.length) {
        break;
      }
      if (dp[i + j]) {
        possible = true;
        break;
      }
    }
    dp[i] = possible;
  }
  return dp[0];
  // T.C: O(N^2)
  // S.C: O(N)
};

// Third Solution
var canJump = function (nums) {
  // validIdx tells the index from which we can go to end of array
  let validIdx = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    let jumps = nums[i];
    if (i + jumps >= validIdx) {
      validIdx = i;
    }
  }
  return validIdx === 0;
  // T.C: O(N)
  // S.C: O(1)
};
