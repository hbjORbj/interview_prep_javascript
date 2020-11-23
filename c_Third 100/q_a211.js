/*
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company has is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also it's guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the employees of the company of an urgent piece of news. He will inform his direct subordinates and they will inform their subordinates and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.
*/

// BFS
var numOfMinutes = function(n, headID, manager, informTime) {
    let adjList = new Array(n).fill(0).map(() => []);
    for (let i = 0; i < manager.length; i++) {
        if (i == headID) continue; // head has no manager
        let managerId = manager[i];
        adjList[managerId].push(i);
    }
    let total = 0, queue = [{manager: headID, time: 0}];
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let {manager, time} = queue.shift();
            let subordinates = adjList[manager];
            if (subordinates.length > 0) {
                for (let subordinate of subordinates) {
                    queue.push({manager: subordinate, 
                                time: time + informTime[manager]});
                }    
            }
            else { // reached a leaf node
                total = Math.max(total, time);
            }
        }
    }
    return total;
    // Time Complexity: O(n), we visit all vertices
    // Space Complexity: O(n), queue can contain at most n nodes in the worst case
};