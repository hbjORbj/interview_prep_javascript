/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

var generateParenthesis = function(n) {
    let res = [];
    generate(n, 0, "");
    return res;
    
    function generate(open, close, str) {
        if (open == 0 && close == 0) {
            res.push(str);
            return;
        }
        if (open > 0) {
            generate(open - 1, close + 1, str + "(");
        }
        if (close > 0) {
            generate(open, close - 1, str + ")");
        }
    }
    // Space Complexity: O(2N) = O(N), call stack can go as deep as 2N
};

