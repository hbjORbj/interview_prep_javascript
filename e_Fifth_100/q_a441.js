/*
Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
*/

var minRemoveToMakeValid = function (s) {
  let arr = s.split("");
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        stack.pop(); // popped opening parentheses paired up
      } else {
        arr[i] = ""; // removing closing brackets without pair
      }
    }
  }
  while (stack.length > 0) {
    // removing opening brackets without pair
    let idxToDel = stack.pop();
    arr[idxToDel] = "";
  }
  return arr.join("");
  // T.C: O(N)
  // S.C: O(N)
};

/*
Solution
Split the string into an array of characters so we can modify individual characters.
Scan through the array.
If we encounter an opening bracket
    push the index into stack
Else if we encounter a closing bracket
    if stack is not empty
        pop an index from stack because this means that the opening bracket at this index paired up
    else
        remove the current closing bracket
After the scanning, if stack is not empty, pop each index and remove the opening bracket at the index
*/
