/*
Graph Traversal (Find Connected Components)
*/

// converting given graph into adjacency matrix
function bfsTraversal(numOfNodes, graph) {
    let adjMatrix = new Array(numOfNodes).fill(0).map(() => new Array(numOfNodes).fill(0));
    let visited = new Array(numOfNodes).fill(false);
    for (let [from, to] of graph) {
        adjMatrix[from][to] = 1;
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
                for (let i = 0; i < adjMatrix[node].length; i++) {
                    if (adjMatrix[node][i] == 1) {
                        queue.push(i);
                    }
                }
            }
        }
        return values;
    }
}

// converting given graph into adjacency matrix
function dfsTraversal(numOfNodes, graph) {
    let adjMatrix = new Array(numOfNodes).fill(0).map(() => new Array(numOfNodes).fill(0));
    let visited = new Array(numOfNodes).fill(false);
    for (let [from, to] of graph) {
        adjMatrix[from][to] = 1;
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
        for (let i = 0; i < adjMatrix[v].length; i++) {
            if (!visited[i] && adjMatrix[v][i] == 1) {
                dfs(i, values);
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