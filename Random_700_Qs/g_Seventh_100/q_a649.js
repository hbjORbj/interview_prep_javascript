/*
Write a program to print.
[ * ] when n=1
[[ * ]] when n=2
[[[ * ]]] when n=3
[[[[ * ]]]] when n=4
*/

function constructPattern(n) {
  if (n < 1) return null;
  let res = new Array(3 + n * 2);
  let mid = Math.floor(res.length / 2);
  res[mid] = "*";
  res[mid - 1] = " ";
  res[mid + 1] = " ";
  let l = mid - 2;
  let r = mid + 2;
  while (l >= 0 && r < res.length) {
    res[l] = "[";
    res[r] = "]";
    l--, r++;
  }
  return res.join("");
  // T.C: O(N)
  // S.C: O(N)
}

console.log(constructPattern(1));
console.log(constructPattern(2));
console.log(constructPattern(3));
