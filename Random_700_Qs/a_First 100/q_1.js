/*
Given a string S and a string T, find the minimum window in S 
which will contain all the characters in T in complexity O(n).
*/

function minimumSubstring(S, T) {
    let l = 0, r = 0, m = new Map();
    let res = "", resLen = Number.MAX_VALUE;
    for (let letter of T) m.set(letter, m.get(letter)+1 || 1);
    let counter = m.size;

    while (r < S.length) {
        let letter = S[r];
        if (m.has(letter)) m.set(letter, m.get(letter)-1);
        if (m.get(letter) == 0) counter--;

        while (counter == 0) {
            if (resLen > r-l+1) {
                res = S.substring(l,r+1);
                resLen = r-l+1;
            }
            if (m.has(S[l])) m.set(S[l], m.get(S[l])+1);
            if (m.get(S[l]) > 0) counter++;
            l++;
        }
        r++;
    }

    return res;
}

/*
Test Cases: 
"abc","" => ""
"SDQXIJENC","QXE" => "QXIJE"

Time Complexity: O(n)
Space Complexity: O(n)

Category: Sliding Window, Two Pointer
*/

