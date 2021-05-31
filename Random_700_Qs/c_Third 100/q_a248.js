/*
Given a binary tree and a node, print all cousins of given node. Note that siblings should not be printed.
*/

function findCousins(root, node) {
    let depth = findDepth(root, x, 0);
    if (depth < 2) return [];
    return searchCousins(root, x, 0, depth, []);
}

function findDepth(root, node, depth) {
    if (!root) return;
    if (root.val == val) return depth;
    return findDepth(root.left, val, depth + 1) || 
           findDepth(root.right, val, depth + 1);
}

function searchCousins(root, targetVal, curDepth, targetDepth, res) {
    if (!root || root.val == targetVal) return;
    if (root.left && root.left.val == targetVal) return; // we don't want siblings
    if (root.right && root.right.val == targetVal) return; // we don't want siblings
    if (curDepth === targetDepth) {
        res.push(root);
        return;
    }
    searchCousins(root.left, targetVal, curDepth + 1, targetDepth, res);
    searchCousins(root.right, targetVal, curDepth + 1, targetDepth, res);
    return res;
}