/*
Minimum Add to Make Parentheses Valid

Given a string s of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
*/

/*
1. We create a stack.
2. Iterate through given string.
If opening bracket is encountered '(':
    push it to stack
Else if closing bracket is encountered ')':
    check if stack is empty or not
    if empty, there isn't corresponding opening bracket, hence increment count
    else pop opening bracket from stack and move on

After iteration is done, stack might contain opening brackets that couldn't find its corresponding closing bracket.
Hence, we add the length of stack to count.
*/
var minAddToMakeValid = function (s) {
  let stack = [],
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) stack.pop();
      else count++;
    }
  }
  while (stack.length > 0) {
    stack.pop();
    count += 1;
  }
  return count;
  // T.C: O(N)
  // S.C: O(N)
};

/*
For parentheses to be valid, 
(1) we need the same number of opening pars and closing pars.
(2) For every closing par encountered, we should've seen an opening parenthesis for it.

We will iterate through given string from the start.
If opening par is encountered
    we increment count for `openParsSeen`
Else if closing par is encountered
    we check if we have available opening par.
    If not available, we need to add an opening par for current closing par so increment `parsToAdd`
    If available, we decrement `openParsSeen` and move on
    
After iteration is done, we add `openParsSeen` and `parsToAdd` for the total number of pars to add in order to
make the given string valid. `parsToAdd` counts the number of opening pars to add in order to match unpaired closing pars.
`openParsSeen` after iteration represents the number of closing pars to add in order to match unpaired opening pars.
*/
var minAddToMakeValid = function (s) {
  let openParsSeen = 0,
    parsToAdd = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openParsSeen++;
    } else if (s[i] === ")") {
      if (openParsSeen > 0) {
        openParsSeen -= 1;
      } else {
        parsToAdd += 1;
      }
    }
  }
  return parsToAdd + openParsSeen;
  // T.C: O(N)
  // S.C: O(1)
};
