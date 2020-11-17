/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 

determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:
- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.
*/

var wordBreak = function(s, wordDict) {
    let dict = new Map(), memo = new Map();
    for (let i = 0; i < wordDict.length; i++) {
        dict.set(wordDict[i], 1);
    }
    return canFormSequence(s, dict, memo);
    // Time Complexity: O(N^2), # of distinct substrings is N^2 / 2 
    // Space Complexity: O(N), call stack can go as deep as the length of string
};
    
// checks if given string can be segmented to form a sequence of words from dictionary
function canFormSequence(s, dict, memo) {
    if (dict.has(s)) return true;
    if (memo.has(s)) return memo.get(s);
    for (let i = 1; i < s.length; i++) {
        let prefix = s.slice(0, i);
        let suffix = s.slice(i);
        if (dict.has(prefix) && canFormSequence(suffix, dict, memo)) {
            memo.set(s, true);
            return true;
        }
    }
    memo.set(s, false);
    return false;
}