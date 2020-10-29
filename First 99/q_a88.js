/*
A box contains a number of choclates that can only br removed 1 at a time or 3 at a time. 

How many ways can the box be emptied? the answer can be very large so return it as modulo of 10^9+7.
*/

function chocolateRemoval1(n) {
    if (n == 0) return 0;
    let count = 0;
    function dfs(cur) {
        if (cur == 0) {
            count = (count + 1) % (10^9+7);
            return;
        }
        if (cur-1 >= 0) dfs(cur-1);
        if (cur-3 >= 0) dfs(cur-3);
    }
    dfs(n);
    return count;
}

console.log(chocolateRemoval1(7))
console.log(chocolateRemoval1(1))
console.log(chocolateRemoval1(0))

function chocolateRemoval2(n) {
    if (n == 0) return 0;
    function waysToRemove(remaining) {
        if (remaining == 1 || remaining == 2) return 1;
        if (remaining == 3) return 2;
        return waysToRemove(remaining-1) + waysToRemove(remaining-3);
    }
    return waysToRemove(n);
}

console.log(chocolateRemoval2(7))
console.log(chocolateRemoval2(1))
console.log(chocolateRemoval2(0))

/*
For Both approaches,

Time Complexity: O(n)
Space Complexity: O(n)

Test Cases:
7 => 9
1 => 1
0 => 0
*/