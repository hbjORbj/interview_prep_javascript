/*
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.
*/

var minRemoveToMakeValid = function(s) {
    let arr = s.split("");
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') {
            stack.push(i);
        }
        else if (arr[i] == ')') {
            if (stack.length == 0) arr[i] = ''; // taking care of closed brackets 
                                                // without corresponding open brackets
            else stack.pop();
        }
    }
    for (let i = 0; i < stack.length; i++) { // taking care of open brackets not closed
        let idx = stack[i];
        arr[idx] = '';
    }
    return arr.join("");
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};