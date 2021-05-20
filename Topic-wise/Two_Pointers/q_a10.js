/*
Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

// First Solution
var backspaceCompare = function (s, t) {
  if (s === null || t === null) {
    return false;
  }
  let stack1 = [],
    stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (stack1.length > 0) stack1.pop();
    } else {
      stack1.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      if (stack2.length > 0) stack2.pop();
    } else {
      stack2.push(t[i]);
    }
  }
  return stack1.join("") === stack2.join("");
  // T.C: O(M + N)
  // S.C: O(M + N)
};

// Second Solution

/*
Traverse both strings from the back.
For both strings,
if a backspace is encountered, skip the next non-backspace character. If a character isn't
skipped, it is part of final string.

After backspacing one or more characters, both pointers i and j must be at the 
same character. If not, they are not equivalent strings. Remember, unskipped chars are
part of the final string. If s and t have the same final strings, their characters must
equal every time after backspacing. Also, if one of pointers reached the front of string earlier than the other, they can't be equivalent strings.
*/
var backspaceCompare = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1;
  let hashS = 0,
    hashT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        hashS++;
      } else {
        if (hashS === 0) break;
        else hashS--;
      }
      i--;
    }
    while (j >= 0) {
      if (t[j] === "#") {
        hashT++;
      } else {
        if (hashT === 0) break;
        else hashT--;
      }
      j--;
    }
    // if they are equivalent strings,
    // after we backspace a chunk of characters,
    // they must be at the same character
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }
    // if they are equivalent strings,
    // both strings' front must be reached at the same time
    if (i >= 0 !== j >= 0) {
      return false;
    }
    i--, j--;
  }
  return true;
  // T.C: O(M + N)
  // S.C: O(1)
};
