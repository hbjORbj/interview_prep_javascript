/*
Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. 

For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1,

where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.
*/

var longestStrChain = function(words) {
    if (words.length == 0) return 0;
    words.sort((a,b) => a.length - b.length); // sort from shortest to longest
    let m = new Map(); // (key, value) in m represents (word, longest length of chain of this word)
    for (let word of words) {
        m.set(word, 1);
        for (let i = 0; i < word.length; i++) {
            let substr = word.slice(0,i) + word.slice(i+1);
            if (m.has(substr)) m.set(word, Math.max(m.get(word), m.get(substr) + 1));
        }
    }
    return Math.max(...m.values());
};
// Time Complexity: O(nlog(n)) (thanks to this constraint: 1 <= words[i].length <= 16)
// Space Complexity: O(n)