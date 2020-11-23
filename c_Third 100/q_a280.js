/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:
- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.

Note:
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.
*/

// BFS is used often when we want to find the node closest to the starting node.
// It is the case here because we want to find the shortest sequence starting from a specific word.
// All possible next connecting words are pushed to queue and we repeat the process until there are no more possible connecting words. If there is an answer, 
// we will be able to find it during the process before we run out of connecting words.

var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set(wordList);
    
    // BFS Traversal
    let queue = [{word: beginWord, seqLen : 1}];
    while (queue.length > 0) {
        let {word, seqLen} = queue.shift();
        if (word == endWord) {
            return seqLen;
        }
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let subseq = word.slice(0, i) + String.fromCharCode(97+j) + word.slice(i + 1);
                if (set.has(subseq)) {
                    queue.push({word: subseq, seqLen: seqLen + 1});
                    set.delete(subseq);
                }
            }
                // We are doing level-order traversal so if some word has already been visited, it means it was on the same level or previous level. 
                // Hence, we don't need to consider it. We want to go down the tree and find the shortest path instead of moving around on the same level or go back to a previous level.
        }
    }
    return 0;
    // Time Complexity: O(maxWordLength * N * 26), N = # of words in wordList
    // Space Complexity: O(N)
}; 