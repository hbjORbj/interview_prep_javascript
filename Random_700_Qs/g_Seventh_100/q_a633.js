/*
When passed two sorted arrays of integers returns an array of any numbers which appear in both.

No value should appear in the returned array more than once.
*/

/*
Qs:
1. Should the returned array be sorted?
2. Are there duplicates in given arrays?

ex)
[1,2,3,5]
[0,1,4,6]

We keep two pointers: one for first sorted array and the other for second sorted array.
We start iterating through both arrays and compare their values.

If first arr's value > second arr's value, we advance second arr's pointer.
Else first arr's value < second arr's value, we advance first arr's pointer.
Else
    we need to check if this number is a duplicate. So, we check if previous element is the same number for both arrays.
    If so, we advance both pointers without pushing the number to result array.
    Else, we push the number to result array and advance both pointers.
*/

function intersection(arr1, arr2) {
  if (
    arr1 === null ||
    arr2 === null ||
    arr1.length === 0 ||
    arr2.length === 0
  ) {
    return [];
  }
  let i = 0,
    j = 0,
    res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      if (i > 0 && j > 0 && arr1[i - 1] === arr1[i]) {
        i++, j++;
      } else {
        res.push(arr1[i]);
        i++, j++;
      }
    }
  }
  return res;
}

console.log(intersection([1, 2, 3, 5], [0, 1, 4, 6]));
console.log(intersection([1, 2, 3, 5], [1, 1, 2, 2]));
console.log(intersection([1, 1, 2, 3], [1, 1, 2, 3, 3]));
console.log(intersection([1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 3]));
console.log(intersection([1], [1, 1, 2, 3, 3]));
