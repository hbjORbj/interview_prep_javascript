/*
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) 

so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.
*/

var minRemoveToMakeValid = function(s) {
    let arr = s.split(""), stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (s[i] == ')') {
            if (stack.length == 0) arr[i] = "";
            else stack.pop();
        }
        else if (s[i] == '(') {
            stack.push(i);
        }
    }
    // Parentheses left in stack are indices of invalid opening parentheses
    for (let idx of stack) arr[idx] = "";
    return arr.join("");
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
