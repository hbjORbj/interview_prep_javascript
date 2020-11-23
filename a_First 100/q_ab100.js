/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. 

You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1. 
*/

var minCostClimbingStairs = function(cost) {
    let minCosts = new Array(cost.length+1); // the last index for the top of the floor
    minCosts[0] = cost[0], minCosts[1] = cost[1];
    // minCosts[i] represents the minimum cost to get to i and climb up from i
    for (let i = 2; i <= cost.length; i++) {
        minCosts[i] = Math.min(minCosts[i-1], minCosts[i-2]) + 
            (i == cost.length ? 0 : cost[i]);
        // 0 instead of cost[i] because there is no more stair to climb up
        // and therefore there is no cost
    }
    return minCosts[minCosts.length-1];
    // DP
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([0, 0, 0, 0]));

/*
Test Cases:
[10, 15, 20] => 15
[1, 100, 1, 1, 1, 100, 1, 1, 100, 1] => 6
[0, 0, 0, 0] => 0
*/