/*
Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order. 
*/

var findFrequentTreeSum = function(root) {
    if (!root) return [];
    let m = new Map(), res = [], maxOccurrence = 0;
    subtreeSum(root, m);
    for (let [num, occurr] of m) {
        if (occurr == maxOccurrence) res.push(num);
    }
    return res;
    
    function subtreeSum(root, m) { // assign all possible subtree sums to map and return the sums that have the greatest number of occurrences
        if (!root) return 0;
        let left = subtreeSum(root.left, m);
        let right = subtreeSum(root.right, m);
        let sum = left + right + root.val;
        m.set(sum, m.get(sum) + 1 || 1);
        maxOccurrence = Math.max(maxOccurrence, m.get(sum));
        return sum;
    } 
    
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

