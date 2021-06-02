/*
Sort Array by Increasing Frequency

Given an array of integers nums, sort the array in increasing order based on the frequency of the values.

If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/

// First Solution
var frequencySort = function (nums) {
  let m = new Map(); // (num, frequency)
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1 || 1);
  }
  m = Array.from(m.entries());
  m.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    else return a[1] - b[1];
  });
  let res = [];
  for (let [num, freq] of m) {
    for (let i = 0; i < freq; i++) res.push(num);
  }
  return res;
  // T.C: O(Nlog(N)), N = length of nums
  // S.C: O(N)
};

// Second Solution
var frequencySort = function (nums) {
  // arrPos[i] is frequency of number i
  let arrPos = new Array(101).fill(0);
  // arrNeg[i] is frequency of number -i
  let arrNeg = new Array(101).fill(0);
  // freq[i] is an array of numbers with frequency i
  let freq = new Array(101).fill(0).map(() => []);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) arrPos[nums[i]]++;
    else arrNeg[-nums[i]]++;
  }
  for (let i = arrPos.length - 1; i >= 0; i--) {
    let freq1 = arrPos[i];
    if (freq1 !== 0) freq[freq1].push(i);
  }
  for (let i = 1; i < arrNeg.length; i++) {
    let freq2 = arrNeg[i];
    if (freq2 !== 0) freq[freq2].push(-i);
  }
  let res = new Array(nums.length),
    idx = 0;
  for (let i = 1; i < freq.length; i++) {
    if (freq[i] === undefined) continue;
    for (let j = 0; j < freq[i].length; j++) {
      for (let k = 0; k < i; k++) {
        res[idx++] = freq[i][j];
      }
    }
  }
  return res;
  // T.C: O(N)
  // S.C: O(1)
};
