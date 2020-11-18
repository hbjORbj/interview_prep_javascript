/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
*/

var findJudge = function(N, trust) {
    let inDegree = new Array(N).fill(0);
    let outDegree = new Array(N).fill(0);
    for (let [giver, receiver] of trust) {
        outDegree[giver-1]++;
        inDegree[receiver-1]++;
    }
    for (let i = 0; i < N; i++) {
        if (inDegree[i] == N-1 && outDegree[i] == 0) {
            return i + 1;
        }
    }
    return -1;
    // Time Complexity: O(max(E, N)), E = # of edges = # of arrays in trust
    // Space Complexity: O(N)
};

// Everybody trusts town judge while town judge trusts nobody.
// Therefore, if we represent [a,b] in trust as a directed graph a -> b, the node with inDegree of V - 1 and outDegree of 0 is the town judge. 
// If there is no such node, there is no town judge.