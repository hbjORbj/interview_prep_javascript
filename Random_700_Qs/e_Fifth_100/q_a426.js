/*
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
*/

var isValid = function (s) {
  if (s.replace(/[\(\)\{\}\[\]]/g, "") !== "") {
    return false; // invalid string
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "{") {
      stack.push("}");
    } else {
      // encountered a closing bracket
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
  // T.C: O(N)
  // S.C: O(N)
};
/*
Idea:
    When we encounter an opening bracket, we will need its closing bracket in the nearest future.
    Therefore, we push a closing bracket of the same type into a stack.
    When we encounter a closing bracket, it should be equivalent to the popped bracket (on top of stack).
    Otherwise, the given string is invalid.
    At the end, the stack should be empty (all parentheses had its own pair)
*/
