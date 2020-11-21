/*
Graph Traversal (Find Connected Components)
*/

// converting given graph into adjacency list
function bfsTraversal(numOfNodes, graph) {
    let adjList = new Array(numOfNodes).fill(0).map(() => []);
    let visited = new Array(numOfNodes).fill(false);
    for (let [from, to] of graph) {
        adjList[from].push(to);
    }
    let res = [];
    for (let i = 0; i < numOfNodes; i++) {
        if (!visited[i]) {
            res.push(bfs(i));
        }
    }
    return res;

    function bfs(v) {
        let values = [], queue = [v];
        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited[node]) {
                values.push(node);
                visited[node] = true;
                for (let next of adjList[node]) {
                    queue.push(next);
                }
            }
        }
        return values;
    }
}

// converting given graph into adjacency list
function dfsTraversal(numOfNodes, graph) {
    let adjList = new Array(numOfNodes).fill(0).map(() => []);
    let visited = new Array(numOfNodes).fill(false);
    for (let [from, to] of graph) {
        adjList[from].push(to);
    }
    let res = [];
    for (let i = 0; i < numOfNodes; i++) {
        if (!visited[i]) {
            res.push(dfs(i));
        }
    }
    return res;

    function dfs(v, values=[]) {
        values.push(v);
        visited[v] = true;
        for (let next of adjList[v]) {
            if (!visited[next]) {
                dfs(next, values);
            }
        }
        return values;
    }
}

console.log(bfsTraversal(9,
    [
        [0,1], [0,3], [3,2],
        [3,4], [3,5], [2,8],
        [4,6]
    ]
));

console.log(dfsTraversal(9,
    [
        [0,1], [0,3], [3,2],
        [3,4], [3,5], [2,8],
        [4,6]
    ]
));