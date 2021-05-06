/*
Is Unique

Implement an algorithm to determine if a string has all unique characters.

What if you cannot use additional data structures?
*/

/*
Qs:
1. Is the given string an ASCII string or an Unicode string?

ASCII: 128 characters
Extended ASCII: 256 characters
Unicode: 143,859 characters
*/

// Assume that the given string is an ASCII string
const isUnique = (str) => {
  let arr = new Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt();
    if (arr[charCode]) {
      return false;
    }
    arr[charCode] = true;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

console.log(isUnique("abca"));
console.log(isUnique("abc"));
