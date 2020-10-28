/*
Given a string S consisting of N lowercase letters, return the minimum number of letters that 
must be deleted to obtain a word in which every letter occurs a unique number of times. 
We only care about occurrences of letters that appear at least once in result.

Qs:
1. What to return if string is empty?
- Return 0;
*/
function minDeletion(S, N) {
    let m = new Map();
    for (let i = 0; i < N; i++) {
        m.set(S[i], m.get(S[i])+1 || 1);
    }
    let frequencies = Array.from(m.values()).sort();
    let count = 0;
    while (true) {
        let prevCount = count;
        for (let i = 0; i < frequencies.length-1; i++) {
            if (frequencies[i] !== 0 && frequencies[i] == frequencies[i+1]) {
                count++;
                frequencies[i] -= 1;
            }
        }
        if (prevCount == count) break; // every character has an unique number of occurrences
    }

    return count;
}

console.log(minDeletion("aaaabbbb", 8));
console.log(minDeletion("ccaaffddecee", 12));
console.log(minDeletion("eeee", 4));
console.log(minDeletion("example", 7));
console.log(minDeletion("", 0));
console.log(minDeletion("people", 6));

/*
"aaaabbbb" => 1
"ccaaffddecee" => 6
"eeee" => 0
"example" => 4
"" => 0
"people" => 3

Time Complexity: O(nlog(n))
Space Complexity: O(n)
*/

