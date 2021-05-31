/*
Construct Binary Tree from String

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.
*/

var str2tree = function (s) {
  let m = new Map();
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      let startIdx = stack.pop();
      m.set(startIdx, i);
    }
  }
  return buildTree(0, s.length - 1);
  // T.C: O(N)
  // S.C: O(H)
  function buildTree(start, end) {
    if (start > end) {
      return null;
    }
    let num = "";
    while (start <= end) {
      if (s[start] === "(") {
        break;
      } else {
        num += s[start];
      }
      start++;
    }
    let root = new TreeNode(Number(num));
    if (s[start] === "(") {
      root.left = buildTree(start + 1, m.get(start) - 1);
      root.right = buildTree(m.get(start) + 2, end - 1);
    }
    return root;
  }
};
