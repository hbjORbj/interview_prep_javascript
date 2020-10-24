/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Qs:
1. What to return when the input string is empty?
- Return false.
2. What to return if it contains a different character?
- Assume that all input strings are valid.
*/
function validParentheses(str) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let par = s[i];
        if (par == '(') stack.push(')');
        else if (par == '{') stack.push('}');
        else if (par == '[') stack.push(']');
        else {
            if (stack.pop() !== par) return false;
        }
    }
    return (stack.length == 0) ? true : false;
}

/*
Test Cases:
"(())" => true
"[)"" => false
"[" => false
"" => false


Idea:
Use a stack to store parentheses. We'll push closing parentheses so that we know all
parentheses are successfully closed by the same type. If they are closed by different type, we will return false. After looping through the string, we do one more check.
Stack's length must be zero because this means that all parentheses paired up successfully. Otherwise, some parentheses were not closed.

Time Complexity: O(n)
Space Complexity: O(n)
*/