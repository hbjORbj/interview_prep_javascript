/*
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company has is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. 

Also it's guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the employees of the company of an urgent piece of news. 

He will inform his direct subordinates and they will inform their subordinates and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.

Qs:
1. Every employee has only one manager, right?
- Yes.
2. Every employee except the head always has a manager, right?
- Yes.
*/
// n-ary Tree structure

var numOfMinutes = function(n, headID, manager, informTime) {
    // converting given data into graph in adjacency list
    let hierarchy = new Array(n);
    for (let i = 0; i < n; i++) hierarchy[i] = []; // initialise with empty array

    // index represents manager's id and values represent the manager's subordinates' id's
    for (let i = 0; i < manager.length; i++) {
        let managerId = manager[i];
        if (managerId !== -1) hierarchy[managerId].push(i);
        // except for head who has no manager
    }
    let max = 0;
    let queue = [{subordinates: [headID], count: 0}];
    while (queue.length > 0) {
        let {subordinates, count} = queue.shift();
        max = Math.max(count, max);
        for (let subordinate of subordinates) {
            queue.push({subordinates: hierarchy[subordinate], 
                        count: count+informTime[subordinate]});
        }
    }
    return max;
    // BFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

/*
Test Cases:
( n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0] ) => 1
( n = 1, headID = 0, manager = [-1], informTime = [0] ) => 0 // edge case (there is only head and no one else)
*/

var numOfMinutes = function(n, headID, manager, informTime) {
    // converting given data into graph in adjacency list
    let hierarchy = new Array(n);
    for (let i = 0; i < n; i++) hierarchy[i] = []; // initialise with empty array

    // index represents manager's id and values represent the manager's subordinates' id's
    for (let i = 0; i < manager.length; i++) {
        let managerId = manager[i];
        if (managerId !== -1) hierarchy[managerId].push(i);
        // except for head who has no manager
    }
    
    let max = 0;
    function dfs(curID, count) {
        let subordinates = hierarchy[curID];
        if (subordinates.length == 0) {
            max = Math.max(max, count);
            return;
        }
        for (let subordinate of subordinates) {
            dfs(subordinate, count+informTime[curID]);
        }
    }
    dfs(headID,0);
    return max;
    // DFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}