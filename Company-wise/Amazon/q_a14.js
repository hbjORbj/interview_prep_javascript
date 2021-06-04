/*
Construct Binary Tree from String

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.
*/

/*
Use Stack
1. Every value inside "()" should become a tree itself. If there are other trees inside the "()", they are
children of current tree. If there is only one node, it is a left child. If there are two nodes, they are left child
and right child.
2. Push the index of opening parenthesis into stack so that we know where this tree starts.
When closing parenthesis is encountered, the last item of stack will either be the start index of this tree, or
a child of this tree. Pop the children and store them temporarily, then now pop the start index and create a new tree and
set its children accordingly. Then, push this new tree into stack since it could be a child of some other tree.

* It can be tricky when creating a new tree if it has children. The index of opening parenthesis of left child can be used to identify the window of root value, so when pushing a node into stack, we should store the index of its opening parenthesis.
3. Iterate through the end of string and your stack will contain the left subtree and the right subtree.
This is because there is no parentheses around the root and hence we didn't build a tree out of it.
So, before bulding starts, we want to wrap the given string with a pair of parentheses.
*/
var str2tree = function (s) {
  if (s === "") {
    return null;
  }
  let stack = [],
    start = 0;
  s = "(" + s + ")";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      let children = [];
      while (typeof stack[stack.length - 1] !== "number") {
        children.push(stack.pop());
      }
      let start = stack.pop(),
        end = i;
      if (children.length === 2) {
        end = children[1][1];
      } else if (children.length === 1) {
        end = children[0][1];
      }
      let node = new TreeNode(Number(s.substring(start + 1, end)));
      if (children.length === 2) {
        node.left = children[1][0];
        node.right = children[0][0];
      } else if (children.length === 1) {
        node.left = children[0][0];
      }
      stack.push([node, start]);
    }
  }
  return stack.pop()[0];
  // T.C: O(N)
  // S.C: O(H)
};
