/*
You are given a string S consisting of N letters ‘a’ and/or ‘b’. 

In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).

Write a function solution that, given such a string S, returns the minimum number of moves 
required to obtain a string containing no instances of three identical consecutive letters.

Examples:
- Given S = “baaaaa” , the function should return 1.
- Give S = “baaabbaabbba” , the function should return 2.
- Given S = “baabab” , the function should return 0.
*/

function minMoves(S) {
    let start = 0, end = 0;
    let moves = 0;
    while (end < S.length) {
        if (S[end] !== S[end+1]) { // end of substring of consecutive chars
            let len = end-start+1;
            moves += Math.floor(len / 3);
            while (start <= end) start++; 
            // we want to search for a new substring so we shift our window
            // to the index after the substring we've just checked
        }
        end++;
    }
    return moves;
}

console.log(minMoves("baaaaa"));
console.log(minMoves("baaabbaabbba"));
console.log(minMoves("aaa"));

// "baaaaa" => 1
// "baaabbaabbba" => 2
// "aaa" => 1

// Time Complexity: O(n)
// Space Complexity: O(1)