/*
Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order.

For example, [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]
*/

/*
Qs
1. Can there be negatives?
- Yes.
2. Can it contain duplicates?
- Yes.
3. Should I modify the array in-place?
- Doesn't matter.
*/

var squaredArray = function (arr) {
  if (arr == null) return null;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  arr.sort((a, b) => a - b);
  return arr;
};

// Time Complexity: O(nlog(n))
// Space Complexity: O(1)

/*
Test cases:
null => null
[] => []
[1] => [1]
[1,1] => [1,1]
*/

// console.log(squaredArray(null));
// console.log(squaredArray([]));
// console.log(squaredArray([1]));
// console.log(squaredArray([1, 1]));
// console.log(squaredArray([-1, 0, 1, 2, 3]));

var squaredArray2 = function (arr) {
  if (arr == null) return null;
  let start = 0,
    end = arr.length - 1;
  let res = [];
  while (start <= end) {
    if (Math.abs(arr[start]) > Math.abs(arr[end])) {
      res.push(arr[start] ** 2);
      start++;
    } else {
      res.push(arr[end] ** 2);
      end--;
    }
  }
  reverseArray(res);
  return res;

  function reverseArray(array) {
    let l = 0,
      r = array.length - 1;
    while (l < r) {
      [array[l], array[r]] = [array[r], array[l]];
      l++, r--;
    }
  }
};
// Time Complexity: O(N)
// Space Complexity: O(N)

/*
1. Largest squared number is either at the beginning or the end. So we set two pointers at each end,
and move inwards. We store numbers from the greatest to the smallest.
2. Reverse the array and return it.
*/

console.log(squaredArray2(null));
console.log(squaredArray2([]));
console.log(squaredArray2([1]));
console.log(squaredArray2([1, 1]));
console.log(squaredArray2([-1, 0, 1, 2, 3]));
