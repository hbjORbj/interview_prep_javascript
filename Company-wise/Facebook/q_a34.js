/*
Binary Tree Maximum Path Sum

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.

A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.
*/

/*
I think the question's defintion of a valid path is quite vague.
To reduce confusion, think of a valid path as one that become a straight line if nodes are rearranged.

Solution:
On the assumption that every sum is positive,
max path sum in a tree = 
root's value 
+ max path sum in left subtree
+ max path sum in right subtree

The reason I made such assumption is because we will turn any negative sum into zero 
since we will always neglect negative path in order to maximise path sum. 

We will traverse nodes in post-order so that we can find path sum of every subtree and get the 
max path sum. One important thing to note is that we have to choose either the left sum or the right sum
in order for the current subtree to become part of a path with a new root. The whole subtree can't become
part of a path with a new root because then it will be a invalid path.
*/
var maxPathSum = function (root) {
  let max = -Infinity;
  dfs(root);
  return max;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return 0;
    }
    let leftMaxSum = Math.max(0, dfs(root.left));
    let rightMaxSum = Math.max(0, dfs(root.right));
    max = Math.max(max, root.val + leftMaxSum + rightMaxSum);
    // we choose one path sum between left subtree's sum and right subtree's sum
    // because the whole subtree can't become part of a path because then it won't be possible
    // for the path to become a straight line when nodes are rearranged
    return root.val + Math.max(leftMaxSum, rightMaxSum);
  }
};
