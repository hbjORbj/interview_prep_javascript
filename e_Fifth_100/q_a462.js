/*
URLify

Write a method to replace all spaces in a string with '%20'.

You may assume that the string has sufficient space at the end to hold the additional characters,

and that you are given the "true" length of the string.

(Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
*/

/*
Solution

We modify the string starting from the end and working backwards.
We have an extra buffer at the end so we can modify characters without worring about
what we are overwriting.

We keep two pointers, one starting at the end of extra buffer and the other
starting at the end of true string.

If we see a space, we replace it with "%20" 
Else we copy the original character
*/
const URLify = (str, trueLen) => {
  let arr = str.split(""); // In order to modify characters in place
  let i = trueLen - 1;
  let j = str.length - 1;
  while (i >= 0) {
    if (arr[i] === " ") {
      arr[j--] = "0";
      arr[j--] = "2";
      arr[j--] = "%";
    } else {
      arr[j--] = arr[i];
    }
    i--;
  }
  return arr.join("");
  // T.C: O(N)
  // S.C: O(1) if the string was given as an array of characters
};

console.log(URLify("Mr John Smith    ", 13));
