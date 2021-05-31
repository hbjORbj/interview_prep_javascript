/*
Next Greater Element III

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n.

If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.
*/

/*
I will consider the given number as a sequence of numbers.

First thing to note is that for any sequence that is in descending order, there is no larger permutation.

1. Convert given number into an array of digits.
2. Iterate through the array from the back. We want to find the pivot point.
The pivot point is arr[i-1] where arr[i-1] < arr[i]. At this point, arr[i...end]
is in descending order because arr[i-1] is the first point where it is less than arr[i].

Hence, by rearranging arr[i...end], it isn't possible to find a greater number.
We should include the pivot point as well. Since we want to find the number just greater than given number, we will iterate from (end to i) and find the first number greater than pivot point.
We swap these two numbers. Now, we have a greater number. But, it isn't the next greater number yet because arr[i...end] is still in descending order.
In order to find the number just greater than given number, we have to turn this subarray
arr[i..end] into ascending order. We can do it by simply reversing it.

That's it!

Now, Convert the array back into number and return it.
*/

var nextGreaterElement = function (n) {
  let arr = n.toString().split("");
  let pivot = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) return -1; // array is in descending order

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]]; // swap
      break;
    }
  }
  let left = arr.slice(0, pivot + 1);
  let right = arr.slice(pivot + 1);
  right.reverse();
  let res = Number(left.join("") + right.join(""));
  return res > Math.pow(2, 31) - 1 ? -1 : res;
  // T.C: O(N)
  // S.C: O(N)
};
