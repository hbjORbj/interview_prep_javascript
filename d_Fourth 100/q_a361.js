/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.

The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 

return true if and only if the given words are sorted lexicographicaly in this alien language.
*/

var isAlienSorted = function(words, order) {
    // index[i] is (i+1)th character's order among other letters
    // e.g. index[1] is b's order among other letters
    let index = new Array(26);
    for (let i = 0; i < order.length; i++) {
        let idx = order[i].charCodeAt() - 97;
        index[idx] = i;
    }
    // if all of two adjacent words are sorted, then all words are in sorted order because
    // this is because order is transitive: a <= b and b <= c implies a <= c

    for (let i = 0; i < words.length-1; i++) {
        let cur = words[i], next = words[i+1];
        for (let j = 0; j < cur.length; j++) {
            if (next[j] == undefined) { 
                // this happens when current word is longer and they have the same prefix
                // shorter word should come first
                return false;
            }
            if (cur[j] !== next[j]) {
                let idx1 = index[cur[j].charCodeAt() - 97];
                let idx2 = index[next[j].charCodeAt() - 97];
                if (idx1 > idx2) { // next word should come first
                    return false;
                } 
                else { // they are in correct order
                    break;
                }
            }
        }
    }
    return true;
    // Time Complexity: O(C), C = total # of characters
    // Space Complexity: O(26) = O(1)
};