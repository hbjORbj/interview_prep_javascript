/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
*/

var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let par = s[i];
        if (par == ')') {
            if (stack.pop() !== '(') return false;
        } else if (par == ']') {
            if (stack.pop() !== '[') return false;
        } else if (par == '}') {
            if (stack.pop() !== '{') return false;
        } else { // open parentheses
            stack.push(par);
        }
    }
    return stack.length == 0; // there might still be remaining parenthese to be closed
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

