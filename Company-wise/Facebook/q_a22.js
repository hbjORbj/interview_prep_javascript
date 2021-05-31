/*
Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
*/

/*
1. Convert string into array so we can remove a character efficiently and easily
2. Iterate through array and 
if opening parenthesis is encounted:
    push it to stack
else if closing parenthesis is encountered:
    check if stack isn't empty. If empty, there is no pair for this closing parenthesis.
    Hence, we remove the current parenthesis.
    If not empty, we pop the corresponding opening parenthesis from stack and move on.
    
3. After iteration is done, stack might contain opening parenthesis that couldn't find its corresponding closing parenthesis. Hence, we pop it from stack and remove it from array. Hence, we will push indices to stack instead of elements themselves.
4. Join the array and return it as string.
*/
var minRemoveToMakeValid = function (s) {
  let arr = s.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(i);
    else if (arr[i] === ")") {
      if (stack.length > 0) stack.pop();
      else arr[i] = "";
    }
  }
  while (stack.length > 0) {
    let idx = stack.pop();
    arr[idx] = "";
  }
  return arr.join("");
  // T.C: O(N)
  // S.C: O(N)
};
