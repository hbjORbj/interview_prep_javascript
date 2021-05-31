/*
When passed a positive integer returns true if the decimal representation of that integer contains no odd digits and otherwise returns false.
*/

function onlyEvenDigits(n) {
  let onlyEvenDigits = true;
  while (n > 0) {
    let rightMostDigit = n % 10;
    if (rightMostDigit % 2 === 1) {
      onlyEvenDigits = false;
      break;
    }
    n = Math.floor(n / 10);
  }
  return onlyEvenDigits;
  // T.C: O(K), K = length of given number; for example, length of 333 is 3.
  // S.C: O(1)
}

console.log(onlyEvenDigits(22222));
// console.log(onlyEvenDigits(22220));
// console.log(onlyEvenDigits(10));
