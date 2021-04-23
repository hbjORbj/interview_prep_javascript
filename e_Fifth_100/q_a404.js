/*
You​ ​are​ ​given​ ​an​ ​array​ ​of​ ​integers​ ​and​ ​an​ ​index​ ​X.​ ​Rearrange​ ​the​ ​array​ ​in​ ​the following​ ​order:
[all​ ​elements​ ​less​ ​than​ ​a[X],​ ​elements​ ​equal​ ​to​ ​a[X],​ ​elements​ ​greater​ ​than​ ​a[X]].

Qs:
1. Do the numbers in each partition need to be sorted?
- No.
*/

const partitionIntoThree = (arr, X) => {
  if (X < 0 || arr === null || arr.length === 0) {
    return null;
  }
  let pivot = arr[X];
  let lowerBoundary = 0,
    upperBoundary = arr.length - 1;
  // I will partition the given array as follows:
  // arr[0...lowerBounday-1], arr[lowerBoundary...upperBoundary], arr[upperBoundary+1...]
  for (let i = 0; i <= upperBoundary; i++) {
    if (arr[i] > pivot) {
      [arr[i], arr[upperBoundary]] = [arr[upperBoundary], arr[i]];
      upperBoundary--;
      i--;
    } else if (arr[i] < pivot) {
      [arr[lowerBoundary], arr[i]] = [arr[i], arr[lowerBoundary]];
      lowerBoundary++;
    }
  }
  return arr;
};

console.log(partitionIntoThree([3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3], 5));
