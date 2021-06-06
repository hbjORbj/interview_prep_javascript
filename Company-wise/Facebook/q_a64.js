/*
Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
According to the definition of LCA on Wikipedia:
"The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."
*/

// General Apporach to LCA
// However, this does not take advantage of given nodes, p and q
var lowestCommonAncestor = function (p, q) {
  let root = p;
  while (root.parent) {
    root = root.parent;
  }
  let lca = null;
  dfs(root);
  return lca;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) return;
    let left = dfs(root.left);
    let right = dfs(root.right);
    let isCurTarget = root === p || root === q;
    if (lca) {
      return;
    }
    if ((left && right) || ((left || right) && isCurTarget)) {
      lca = root;
      return;
    }
    return left || right || isCurTarget;
  }
};

/*
More efficient solution:
1. Get depth of p and q and make their level equal by making deeper tree climb up.
2. If both trees are at the same node, p or q is the lca, because this means one tree was somewhere in subtree of another.
Else, start pushing up both nodes to the top until they have the common parent.
*/
var lowestCommonAncestor = function (p, q) {
  if (!p || !q) {
    return null;
  }
  let pDepth = getDepth(p);
  let qDepth = getDepth(q);
  // equalize depths
  while (pDepth !== qDepth) {
    if (pDepth > qDepth) {
      p = p.parent;
      pDepth--;
    } else {
      q = q.parent;
      qDepth--;
    }
  }
  // one tree was somewhere in subtree of another
  if (p === q) {
    return p;
  }
  while (p !== q && p.parent && q.parent) {
    p = p.parent;
    q = q.parent;
  }
  return p;
  // T.C: O(N)
  // S.C: O(1)
};

function getDepth(root) {
  let depth = 0;
  while (root.parent) {
    root = root.parent;
    depth++;
  }
  return depth;
}
