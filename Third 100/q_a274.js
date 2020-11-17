/*
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. 

The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.
*/

// With using slice()
var str2tree = function(s) {
    return createTree(s);

    function createTree(str) {
        if (str.length == 0) return null;
        let idx = str.indexOf('(');
        if (idx == -1) return new TreeNode(str);
        let root = new TreeNode(str.slice(0, idx));
        let openPar = 0, closePar = 0;
        for (let i = idx; i < str.length; i++) {
            if (str[i] == '(') openPar++;
            else if (str[i] == ')') closePar++;
            if (openPar == closePar) {
                root.left = createTree(str.slice(idx+1, i));
                root.right = createTree(str.slice(i+2, str.length-1));
                break;
            }
        }
        return root;
    }
};

// Without using slice()
var str2tree = function(s) {
    let m = new Map(); // (key, value) in m is (index of opening par, index of corresponding closing par)
    let parStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            parStack.push(i);
        } else if (s[i] == ')') {
            m.set(parStack.pop(), i);
        }
    }

    return createTree(0, s.length - 1);
    
    function createTree(left, right) {
        if (left > right) return null;
        let val = "";
        while (left <= right && s[left] !== '(') {
            val += s[left++];
        }
        let root = new TreeNode(Number(val));
        if (s[left] == '(') {
            let leftEnd = m.get(left) -1;
            let rightStart = m.get(left) + 2;
            root.left = createTree(left + 1, leftEnd);
            root.right = createTree(rightStart, right - 1);    
        }
        return root;
    }
}