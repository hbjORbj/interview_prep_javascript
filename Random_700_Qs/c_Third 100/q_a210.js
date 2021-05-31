/*
Given an array of strings, find if the given strings can be chained to form a circle. 

A string X can be put before another string Y in circle if the last character of X is same as first character of Y.

Input: arr[] = {"geek", "king"}
Output: Yes.

Input: arr[] = {"for", "geek", "rig", "kaf"}
Output: Yes, "for", "rig", "geek" and "kaf".
*/

// We'll check two conditions.
// 1. Indegree and Outdegree of each vertex should be the same. 
// 2. The graph should be strongly connected because if it has a loop which goes through all vertices 
// then we can reach to any vertex from any other vertex.

function circleChainedWords(arr) {
    let inDegree = new Map(), outDegree = new Map();
    let m = new Map(), visited = new Map();
    for (let word of arr) {
        let firstChar = word[0], lastChar = word[word.length-1];
        outDegree.set(firstChar, outDegree.get(firstChar) + 1 || 1);
        inDegree.set(lastChar, inDegree.get(lastChar) + 1 || 1);
        visited.set(firstChar, false);
        if (m.has(firstChar)) m.set(firstChar, [...m.get(firstChar), lastChar]);
        else m.set(firstChar, [lastChar]);
    }
    for (let [char, indegree] of inDegree) {
        if (outDegree.get(char) !== indegree) return false;
    }

    function dfsTraversal(vertex, visited) {
        if (visited.get(vertex) == false) {
            visited.set(vertex, true);
            let vertices = m.get(vertex);
            for (let v of vertices) {
                dfsTraversal(v, visited);
            }
        }
    }

    dfsTraversal(arr[0][0], visited);

    for (let visit of visited.values()) {
        if (visit == false) return false;
    }

    return true;
}

console.log(circleChainedWords(["geek", "king"])); // => true
console.log(circleChainedWords(["for", "geek", "rig", "kaf"])); // => true
console.log(circleChainedWords(["aab", "bac", "aaa", "cda"])); // => true
console.log(circleChainedWords(["aaa", "bbb", "baa", "aab"])); // => true
console.log(circleChainedWords(["aaa"])); // => true
console.log(circleChainedWords(["aaa", "bbb"])); // => false
console.log(circleChainedWords(["abc", "efg", "cde", "ghi", "ija"])); // => true
console.log(circleChainedWords(["ijk", "kji", "abc", "cba"])); // => false
console.log(circleChainedWords(["axb", "bxc", "cxd", "dxa","dxe","exd"])); // => true

