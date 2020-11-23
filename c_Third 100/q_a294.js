/*
There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
*/

// BFS
var findOrder = function(numCourses, prerequisites) {
    let adjList = new Array(numCourses).fill(0).map(() => []);
    let inDegree = new Array(numCourses).fill(0);
    for (let [course, preCourse] of prerequisites) {
        adjList[preCourse].push(course);
        inDegree[course]++;
    }
    // Start with courses that have no prerequisite
    let queue = [], res = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        let node = queue.shift();
        for (let next of adjList[node]) {
            inDegree[next]--;
            if (inDegree[next] == 0) { // all pre-requisites for this course are taken
                queue.push(next);
            }
        }
        res.push(node);
    }
    return res.length == numCourses ? res : [];
    // Time Complexity: O(V + E), if there is a valid answer, we visit every node and all of its neighbours (those that current node is pointing to)
    // Space Complexity: O(V + E), for adjacency list  
};


// DFS
var findOrder = function(numCourses, prerequisites) {
    let adjList = new Array(numCourses).fill(0).map(() => []);
    let visited = new Array(numCourses).fill(false);
    let inDegree = new Array(numCourses).fill(0);
    for (let [course, preCourse] of prerequisites) {
        adjList[preCourse].push(course);
        inDegree[course]++;
    }
    // We can take courses that have no prerequisite or whose pre-requisites have already been taken
    let res = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0 && !visited[i]) {
            dfs(i);
        }
    }

    return res.length === numCourses ? res : [];
    
    function dfs(node) {
        res.push(node);
        visited[node] = true;
        for (let next of adjList[node]) {
            inDegree[next]--;
            if (inDegree[next] == 0 && !visited[next]) {
                dfs(next);
            }
        }
    }
    // Time Complexity: O(V + E), if there is a valid answer, we visit every node and all of its neighbours (those that current node is pointing to)
    // Space Complexity: O(V + E), for adjacency list  
};