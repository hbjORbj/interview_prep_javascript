/*
Input array [3, 2, 4, 3, 5, 3, 5, 2, 9] of size N, given number K,

return an array of size K, which is randomly picked from input array.
*/

/*
Qs: 
1. Is the given array not sorted?
2. Can there be duplicates?
3. Can there be negative numbers?
4. What if K is greater than array's length?
5. Can we use the same element more than once?

Let N be the length of given array.

If K is greater than N, return an empty array.
If K is equal to N, return the given array (that is the only possible array of size K).

Simply taking the first K elements won't do it because we want numbers to be picked "randomly".

Hence, Math.floor(Math.random() * N) will give us a random value from 0 to N-1, which are valid indices.

* Assume that we can't use the same element more than once.

*/

function randomSubarray(arr, K) {
  let N = arr.length;
  if (K > N) return [];
  if (K === N) return arr;
  // usedElemIdx is the index where the index of a used element will go into
  let res = [],
    usedElemIdx = N - 1;
  while (res.length < K) {
    // N - res.length is explained below
    let randomIdx = Math.floor(Math.random() * (N - res.length));
    res.push(arr[randomIdx]);
    // this index shouldn't be a possibility anymore
    // hence, we swap element at randomIdx with element at usedElemIdx and
    // randomIdx will now range from 0 to N - 1 - # of used elements (which is equivalent to res.length)
    [arr[randomIdx], arr[usedElemIdx]] = [arr[usedElemIdx], arr[randomIdx]];
    usedElemIdx--;
  }
  return res;
}

console.log(randomSubarray([1, 2, 3, 4, 5, 6, 7], 3));
