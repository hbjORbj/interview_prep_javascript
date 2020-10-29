/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    let numOfPaths = [];
    numOfPaths[0] = 0, numOfPaths[1] = 1, numOfPaths[2] = 2; // Base Cases
    for (let i = 3; i <= n; i++) {
        numOfPaths[i] = numOfPaths[i-1] + numOfPaths[i-2];
    }
    return numOfPaths[n];
    // numOfPaths[top] = numOfPaths[top-1] + numOfPaths[top-2]
    // numOfPaths[i] represents the number of possible paths to get to i
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));

/*
Test Cases:
2 => 2
3 => 3
4 => 5
5 => 8

Idea:
The number of paths to climb up to i is the number of paths to get to i-1 + the number of paths to get to i-2.
We want to find the number of possible paths to top, which is represented by n.
So, we need to compute numberOfPaths(n) which equals numberOfPaths(n-1) + numberOfPaths(n-2).
We know for certain that numberOfPaths(0) is 0, numberOfPaths(1) is 1, and numberOfPaths(2) is 2.
So, these will be our base cases.
*/

var minCostClimbingStairs = function(cost) {
    let prevPrev = cost[0], prev = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let current = cost[i] + Math.min(prevPrev, prev);
        // current represents the minimum cost to get to this step from the start and climb up from this step
        prevPrev = prev;
        prev = current;
        // since prev becomes current and prevPrev becomes prev, they both represent the minimum cost to get to where they are currently at from the start and climb up from there
    }
    // Now, we can reach the top of the floor from both prevPrev and prev.
    // prev is the minimum cost to reach the top floor by stepping once
    // and prevPrev is the minimum cost to reach to top floor by stepping twice.
    // We want to minimise the cost to get to the top, so we compute the min value between them
    return Math.min(prevPrev, prev);
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}