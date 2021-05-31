var relativeSortArray = function (arr1, arr2) {
  let m = new Map(),
    res = [];
  for (let i = 0; i < arr1.length; i++) {
    m.set(arr1[i], m.get(arr1[i]) + 1 || 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let freq = m.get(arr2[i]);
    for (let j = 0; j < freq; j++) res.push(arr2[i]);
    m.delete(arr2[i]);
  }
  let remains = [];
  for (let [num, freq] of m) {
    for (let i = 0; i < freq; i++) remains.push(num);
  }
  remains.sort((a, b) => a - b);
  return res.concat(remains);
  // T.C: O(Nlog(N) + M), N = length of arr 1, M = length of arr2
  // S.C: O(N)
};

var relativeSortArray = function (arr1, arr2) {
  let count = new Array(1001).fill(0);
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    count[arr1[i]]++;
  }
  for (let i = 0; i < arr2.length; i++) {
    let freq = count[arr2[i]];
    for (let j = 0; j < freq; j++) {
      res.push(arr2[i]);
      count[arr2[i]]--;
    }
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      let freq = count[i];
      for (let j = 0; j < freq; j++) res.push(i);
    }
  }
  return res;
  // T.C: O(N + M), N = length of arr 1, M = length of arr2
  // S.C: O(1), assuming that we don't count result array as extra space
};
