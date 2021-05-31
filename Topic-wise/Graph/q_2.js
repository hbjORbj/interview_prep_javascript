/*
Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList,
return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
*/

// BFS is used often when we want to find the node closest to the starting node.
// It is the case here because we want to find the shortest path starting from a specific word.
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let queue = [];
  queue.push({ word: beginWord, pathLen: 1 });
  while (queue.length > 0) {
    let { word, pathLen } = queue.shift();
    if (word === endWord) {
      // reached the target
      return pathLen;
    }
    for (let i = 0; i < word.length; i++) {
      // try all possible strings with one different char
      let prefix = word.substring(0, i);
      let suffix = word.substring(i + 1);
      for (let i = 0; i < 26; i++) {
        let newStr = prefix + String.fromCharCode(97 + i) + suffix;
        if (wordSet.has(newStr)) {
          // check if new word exists in given word set
          queue.push({ word: newStr, pathLen: pathLen + 1 });
          wordSet.delete(newStr); //  no need to visit it again
        }
      }
    }
  }
  return 0; // couldn't reach the target
  // T.C: O(26 * maxLen^2 * N) = O(maxLen^2 * N), maxLen = max # of word, N = # of words in wordList
  // maxLen^2 because of substring() operation which takes maxLen time
  // S.C: O(N), queue will contain N words at most
};
