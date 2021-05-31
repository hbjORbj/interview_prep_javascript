/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.
*/

var numberOfSubstrings = function(s) {
    let obj = {'a': 0, 'b': 0, 'c': 0};
    let total = 0, count = 0, start = 0;
    for (let end = 0; end < s.length; end++) {
        obj[s[end]]++;
        if (obj[s[end]] == 1) count++;
        while (count === 3) {
            total += s.length - end;
            obj[s[start]]--;
            if (obj[s[start]] == 0) count--;
            start++;
        }
    }
    return total;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
