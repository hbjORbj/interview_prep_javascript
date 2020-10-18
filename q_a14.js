/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 

Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz
*/

function letterCombinations(digits) {
    let res = [''], phone = {2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"};
    function combine(digits) {
        if (!digits.length) return;
        let digit = digits.shift();
        let len = res.length;
        for (let i = 0; i < len; i++) {
            let str = res.shift();
            for (let letter of phone[digit]) res.push(str+letter);
        }
        combine(digits);
        return res;
    }
    return combine(digits.split(""));
    // Time Complexity: O(3^n * 4^m) where n = number of digits with three letters, m = number of digits with four letters
    // Space Complexity: O(3^n * 4^m)
};

/*
Test Cases: "23" => ["ad","ae","af","bd","be","bf","cd","ce","cf"];
Idea:
1. Create an object that maps each number to corresponding letters.
2. We will build combinations incrementally. So, we'll take a digit from the given input from the beginning and append 
all of its corresponding letters to all existing combinations and repeat this process until the end of given input.
3. Since there is no existing combination at the beginning, I will initialise an array res with '' as an element.

Category: Combination, Kind of DFS
*/