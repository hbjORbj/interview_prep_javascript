var canFinish = function(numCourses, prerequisites) {
    let graph = new Array(numCourses).fill(0).map(() => []);
    for (let pair of prerequisites) {
        let prerequisite = pair[1];
        let course = pair[0];
        graph[prerequisite].push(course);
    }
    let visited = new Array(numCourses).fill(false);
    let visiting = new Array(numCourses).fill(false);

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i) == true) return false;
    }
    return true;

    function hasCycle(course) {
        if (visited[course] == false) {
            visiting[course] = true;
            let courses = graph[course];
            for (let course of courses) {
                if (visiting[course] == true) return true;
                if (hasCycle(course) == true) return true; 
                // initiate another search from the next connected node
                // adding it to our recursion call stack
            }
        }

        visiting[course] = false;
        visited[course] = true;
        return false;
    }
    // DFS Brute Force
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)
};

console.log(canFinish(2, [[1,0], [0,1]]));
console.log(canFinish(3, [[1,0], [2,1]]));

/*
Test Cases:
2, [[1,0], [0,1]] => false
3, [[1,0], [2, 1]] => true
*/