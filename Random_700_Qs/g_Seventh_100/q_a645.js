/*
Question Link: https://leetcode.com/discuss/interview-question/541160/Twilio-OA-2020
*/
function productSort(arr) {
  let m = new Map();
  for (let i = 0; i < arr.length; i++) {
    m.set(arr[i], m.get(arr[i]) + 1 || 1);
  }
  m = Array.from(m.entries());
  m.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let res = [];
  for (let [num, freq] of m) {
    for (let i = 0; i < freq; i++) res.push(num);
  }
  return res;
  // T.C: O(Nlog(N)), N = length of arr
  // S.C: O(N)
}

console.log(productSort([4, 5, 6, 5, 4, 3]));
