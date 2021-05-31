/*
Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
*/

/*
Graph, BFS

Think of every word as a node. 
A node is directed to another node if they differ by one character.
We create a graph in such a way and use BFS to find the shortest path to endWord starting at beginWord
*/

var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList === null || wordList.length === 0) {
    return 0;
  }
  // Fill adjacency list
  let adjList = new Map();
  let wordSet = new Set(wordList);
  wordSet.add(beginWord);
  for (let word of wordSet) {
    fillAdjList(word, wordSet, adjList);
  }
  return bfs([{ word: beginWord, depth: 1 }], adjList, endWord);
  // T.C: O(k*N), where k = length of word, N = number of words
  // S.C: O(N^2), adjacency list (each node can contain N-1 nodes)
};

const fillAdjList = (word, wordSet, adjList) => {
  adjList.set(word, []);
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 26; j++) {
      let newStr =
        word.substring(0, i) +
        String.fromCharCode(97 + j) +
        word.substring(i + 1);
      if (word !== newStr && wordSet.has(newStr)) {
        adjList.get(word).push(newStr);
      }
    }
  }
};

const bfs = (queue, adjList, target) => {
  let visited = new Map();
  while (queue.length > 0) {
    let { word, depth } = queue.shift();
    if (word === target) {
      return depth;
    }
    if (visited.get(word)) continue;
    visited.set(word, true);
    let neighbours = adjList.get(word);
    for (let i = 0; i < neighbours.length; i++) {
      if (!visited.get(neighbours[i])) {
        queue.push({ word: neighbours[i], depth: depth + 1 });
      }
    }
  }
  return 0;
};
