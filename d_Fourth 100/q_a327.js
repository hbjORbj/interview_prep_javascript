/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var groupAnagrams = function(strs) {
    let m = new Map();
    // (key, value) in m is (word, array of anagrams)
    // I will find "word" by sorting a word in alphabetical order
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        if (!m.has(sorted)) m.set(sorted, []);
        m.get(sorted).push(strs[i]);
    }
    return Array.from(m.values());
    // Time Complexity: O(maxWordLen*log(maxWordLen) * N)
    // Space Complexity: O(N)
};

var groupAnagrams = function(strs) {
    let m = new Map();
    // (key, value) in m is (some key, array of anagrams)
    for (let word of strs) {
        let charArr = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            let charCode = word[i].charCodeAt();
            let idx = charCode - 97;
            charArr[idx]++;
        }
        let key = charArr.join("#");
        if (!m.has(key)) m.set(key, []);
        m.get(key).push(word);
    }
    return Array.from(m.values());
    // Time Complexity: O(maxWordLen * N)
    // Space Complexity: O(N)
};