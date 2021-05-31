/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.

Note:
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.
*/

// With using Map
/*
BFS Traversal
(key, val) in m is (word, words with one letter different)
Start traversing from start word and move on to next word in BFS manner until we reach the end word.
If we reach the end word, we update with the length of sequence to track the minimum length.
Else, we return 0.
*/
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set([beginWord, ...wordList]);
    let m = new Map(), visited = new Map();
    for (let word of set) {
        m.set(word, []);
        visited.set(word, false);
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let transformed = word.slice(0,i) + String.fromCharCode(97+j) + word.slice(i+1);
                if (set.has(transformed) && transformed !== word) m.get(word).push(transformed);
            }
        }
    }
    
    let queue = [{word: beginWord, depth: 1}];
    while (queue.length > 0) {
        let {word, depth} = queue.shift();
        if (word == endWord) {
            return depth;
        }
        if (visited.get(word)) continue; 
        // We are doing level-order traversal so if some word has already been visited, it means it was on the same level or previous level. 
        // Hence, we don't need to consider it. We want to go down the tree and find the shortest path instead of moving around on the same level or go back to a previous level.
        visited.set(word, true);
        for (let next of m.get(word)) {
            if (!visited.get(next)) {
                queue.push({word: next, depth: depth + 1});
            }
        }
    }
    return 0;
	// Time Complexity: O(maxWordLen * N * 26) = O(maxWordLen * N), N = # of words in wordList
	// Space Complexity: O(N^2)
};