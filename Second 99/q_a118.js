/*
Write a function solution that, given a string S of N lowercase English letters, 

returns a string with no instances of three identical consecutive letters, obtained from S 

by deleting the minimum possible number of letters.

Examples:
- Given S = "eedaaad" , the function should return "eedaad" . 
- Given S = "xxxtxxx" , the function should return "xxtxx" .
- Given S = "uuuuxaaaaxuuu" , the function should return "uuxaaxuu" .
*/

function lessConsecutiveStr(S) {
    let res = "";
    let start = 0, end = 0;
    while (end < S.length) {
        if (S[end] !== S[end+1]) { // our window has no more consecutive, same character 
            let len = end - start + 1;
            if (len >= 3) res += S.substring(start, start+2);
            else res += S.substring(start,end+1);
            while (start <=  end) start++; // slide our window to search for a new substring 
        }
        end++;
    }
    return res;
}

console.log(lessConsecutiveStr("eedaaad"));
console.log(lessConsecutiveStr("xxxtxxx"));
console.log(lessConsecutiveStr("uuuuxaaaaxuuu"));
console.log(lessConsecutiveStr(""));
console.log(lessConsecutiveStr("abc"));
console.log(lessConsecutiveStr("a"));

// "eedaaad" => "eedaad" . 
// "xxxtxxx" => "xxtxx" .
// "uuuuxaaaaxuuu" => "uuxaaxuu" 
// "" => ""
// "abc" => "abc"
// "a" => "a"