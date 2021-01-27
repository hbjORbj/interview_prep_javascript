/*
Reverse the words in a sentence.

Ex) "this is a string" => "string a is this"
*/

var reverseWords1 = function (str) {
  if (str === null || str === "") return str;
  let arr = str.split("");
  arr.reverse();
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === " " || arr[i + 1] === undefined) {
      reverseChars(start, i);
      start = i + 2;
    }
  }

  return arr.join("");

  function reverseChars(l, r) {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++, r--;
    }
  }
};

/*
Qs:
1. What if given string is empty?
- Return an empty string.
2. Should I consider a word as a chunk of letters delimited by space?

Solve:
1. Reverse the entire string.
2. Reverse each word.

Time Complexity: O(N) where N is the size of given string, because we scan through the whole string
Space Complexity: O(N), because we create an array of size N
*/

console.log(reverseWords1("this is a string"));

var reverseWords2 = function (str) {
  if (str === null || str === "") return str;
  let res = "",
    temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      res += temp + " ";
      temp = "";
    } else {
      temp = str[i] + temp;
    }
  }
  res += temp;
  return res;
};

/*
Solve:
1. We traverse the string from the back, and when we find a word, we place it into a new string.
2. Return the new string.
(How do we decide if we've found a word? If we encouner an empty space, that means that we've just passed a word.)

Time Complexity: O(N), we scan through the entire string which is of size N
Space Complexity: O(N), new string of size N
*/
console.log(reverseWords2("this is a string")); // "string a is this"
