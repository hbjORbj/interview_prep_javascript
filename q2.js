/*
Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing 
in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.
*/

function smallestLargerNumber(n) {
    let arr = n.toString().split("");
    let minDiff = Number.MAX_VALUE;
    let res;
    let pivot = -1;
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = i-1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                let copy = arr.slice();
                let temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
                let diff = Number(copy.join(""))-n;
                if (minDiff > diff) {
                    pivot = j;
                    res = copy.slice();
                    minDiff = diff;
                }
            }
        }
    }

    if (pivot == -1) return -1;
    let lSubstr = res.slice(0, pivot+1).join("");
    let rSubstr = res.slice(pivot+1).sort().join("");
    let ans = Number(lSubstr + rSubstr);
    return ans <= 2**31-1 ? ans : -1;
}

/*
Test cases: 
12 => 21
3892 => 3928
*/