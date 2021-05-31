/*
Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.

Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.

For example, there won't be input like 3a or 2[4].
*/

/*
First Solution: Using one stack

1. Iterate through given string and push each character into stack.
2. If stack's last element is closing bracket ']'
    (1) pop ']' from stack
    (2) pop elements until last element is opening bracket '[' and stringify popped elements as it is data. 
    (3) pop '[' from stack and start popping again until last element is non-digit or stack is empty. 
    (4) parse popped elements into integer as it is `k`.
    (5) repeat the stringified data k times and push it back to stack and continue iterating through string.
3. Pop all elements from stack, join them in order and return.
*/
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === "]") {
      stack.pop();
      validateStack(stack);
    }
  }
  let res = "";
  while (stack.length > 0) {
    res = stack.pop() + res;
  }
  return res;
};

function validateStack(stack) {
  let data = "",
    number = "";
  // break if stack is empty (which will never occur since input is valid) or last element is opening bracket
  while (stack.length > 0 && stack[stack.length - 1] !== "[") {
    data = stack.pop() + data;
  }
  // pop opening bracket
  stack.pop();
  // break if stack is empty or last element is non-digit
  while (
    stack.length > 0 &&
    stack[stack.length - 1].charCodeAt() >= 48 &&
    stack[stack.length - 1].charCodeAt() <= 57
  ) {
    number = stack.pop() + number;
  }
  stack.push(data.repeat(parseInt(number, 10)));
}

/*
Second Solution: use two stacks, one for numbers and the other for encoded strings

Iterate through given string.
At each character, we check the following:

If char is digit
    keep track of it by appending it to `k` 
Else if char is '['
    push `k` to `kStack`
    push `curStr` to `prevStack`
    set `k` to an empty string
    set `curStr` to an empty string
Else if char is ']'
    pop an element curK from kStack
    pop an element prev from prevStack
    set curStr to prev + curStr.repeat(curK)
Else
    append character to `curStr`
*/
var decodeString = function (s) {
  let k = "",
    curStr = "";
  let prevStack = [],
    kStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      k += s[i];
    } else if (s[i] === "[") {
      kStack.push(k);
      prevStack.push(curStr);
      k = "";
      curStr = "";
    } else if (s[i] === "]") {
      let prev = prevStack.pop();
      let curK = kStack.pop();
      curStr = prev + curStr.repeat(curK);
    } else {
      curStr += s[i];
    }
  }
  return curStr;
};
