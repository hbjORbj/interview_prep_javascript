/*
Given a binary tree, return all values given a certain height H.
*/

// BFS
function valuesAtDepthH(root, H) {
    let queue = [], values = [];
    queue.push({node: root, depth: 1});

    while (queue.length > 0) {
        let {node, depth} = queue.shift()
        if (depth == H) {
            values.push(node.val);
            continue; // optimisation
        }
        if (node.left) queue.push({node: node.left, depth: depth + 1});
        if (node.right) queue.push({node: node.right, depth: depth + 1});
    }
    return values;
}

//DFS
function valuesAtDepthH(root, H) {
    let values = [];
    function dfsTraversal(root, depth) {
        if (!root) return;
        if (depth == H) {
            values.push(root.val);
            return;
        }
        dfsTraversal(root.left, depth+1);
        dfsTraversal(root.right, depth+1);
    }
    dfdsTraversal(root, 1);
    return values;
}