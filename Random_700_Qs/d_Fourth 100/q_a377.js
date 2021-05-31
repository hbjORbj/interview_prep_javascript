/*
Check if a String is a rotation of another.

For example,
["canada", "dacana"] => true
["canada", "canada"] => true
["canada", "canary"] => false
["dacana", "adacan"] => true
*/

var rotatedString = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let concat = str1.concat(str1);
  return concat.includes(str2);
};

/*
Qs:
1. How do you want the result? Should it be a boolean?
- Yes.
2. What is both strings are equal?
- Return true.

First of all, both strings' lengths must be the same. Otherwise, return false.

We concatenate a string to itself and check whether this concatenated string contains the other string.
In other words, check whether the other string is a substring of the concatenated string.
This works because every possible rotated string is a substring of a concatenated string (if they are a rotation of each other).

Test Cases:
("", "") => true
("a", "a") => true
("abc", "ab") => false


Time Complexity: O(N) where N is the length of a given string, because we scan the concatenated string to check if the other string is its substring
Space Complexity: O(N), because we concatenate a string of size N
*/

console.log(rotatedString("", "")); // true
console.log(rotatedString("a", "a")); // true
console.log(rotatedString("abc", "ab")); // false
console.log(rotatedString("canada", "dacana")); // true
console.log(rotatedString("canada", "canada")); // true
console.log(rotatedString("canada", "canary")); // false
console.log(rotatedString("dacana", "adacan")); // true
