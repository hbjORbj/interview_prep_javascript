/*
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements.

You may return the answer in any order.
*/

/*
Create a hash table with entry being (num, number of occurrence)
Sort the hash table in descending order of number of occurrences
Return the first k numbers
*/
var topKFrequent = function (nums, k) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1 || 1);
  }
  let arr = Array.from(m.entries());
  arr.sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
  // T.C: O(Nlog(N))
  // S.C: O(N)
};

var topKFrequent = function (nums, k) {
  let m = new Map(),
    set = new Set();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1 || 1);
  }
  for (let i = 0; i < k; i++) {
    let max = 0,
      maxNum = null;
    for (let [num, freq] of m) {
      if (!set.has(num) && freq > max) {
        max = freq;
        maxNum = num;
      }
    }
    if (maxNum !== null) set.add(maxNum);
  }
  return Array.from(set);
  // T.C: O(k*N)
  // S.C: O(N)
};
