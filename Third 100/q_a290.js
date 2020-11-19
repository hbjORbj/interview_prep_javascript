/*
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.
*/

// BFS Traversal
var depthSum = function(nestedList) {
    let sum = 0;
    let queue = [{list: nestedList, depth: 1}];
    while (queue.length > 0) {
        let {list, depth} = queue.shift();
        for (let i = 0; i < list.length; i++) {
            let elem = list[i]
            if (elem.isInteger()) {
                sum += depth * elem.getInteger();
            } else {
                queue.push({list: elem.getList(), depth: depth + 1});
            }
        }
    }
    return sum;
    // Time Complexity: O(N), N = the total number of nested elements
    // Space Complexity: O(N), queue contains N elements at most
};

// DFS Traversal
var depthSum = function(nestedList) {
    return dfs(nestedList, 1);
    // Time Complexity: O(N), N = the total number of nested elements
	// Space Complexity: O(K), K = max level of nesting
};

function dfs(nestedList, depth, sum = 0) {
    for (let i = 0; i < nestedList.length; i++) {
        if (nestedList[i].isInteger()) {
            sum += nestedList[i].getInteger() * depth;
        } else {
            sum += dfs(nestedList[i].getList(), depth + 1);
        }
    }
    return sum;
};
