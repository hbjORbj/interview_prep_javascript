/*
Remove All Adjacent Duplicates In String

You are given a string s consisting of lowercase English letters.

A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
*/

/*
First Solution: Stack
1. Iterate through given string. At each character, check if stack's last element is the same as current character.
If so, pop it and move on to next character.
Else, push current character to stack and move on to next character.
2. After iteration is done, pop all elements from stack and join them and return the string.
*/
var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  let res = "";
  while (stack.length > 0) {
    res = stack.pop() + res;
  }
  return res;
  // T.C: O(N)
  // S.C: O(N-D), where D = number of adjacent duplicate characters
};

/*
Second Solution: Two-Pointer
i is the index the next output char will go into
j is the index iterating through given string
*/
var removeDuplicates = function (s) {
  let i = 0,
    res = new Array(s.length);
  for (let j = 0; j < s.length; j++) {
    res[i] = s[j];
    if (i > 0 && res[i] === res[i - 1]) {
      i -= 1;
    } else {
      i += 1;
    }
  }
  return res.slice(0, i).join("");
  // T.C: O(N)
  // S.C: O(N)
};
