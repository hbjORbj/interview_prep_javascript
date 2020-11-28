/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
*/

var mergeTrees = function(t1, t2) {
    return merge(t1, t2);
    function merge(t1, t2) {
        if (t1 && t2) t1.val += t2.val;
        else return t1 || t2;
        t1.left = merge(t1.left, t2.left);
        t1.right = merge(t1.right, t2.right);
        return t1;
    }
    // Time Complexity: O(min(M,N)),
    // Space Complexity: O(min(H of t1, H of t2)) 
};