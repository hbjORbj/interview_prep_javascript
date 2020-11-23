/*
There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; 

S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

Return a string representing the final state. 
*/

var pushDominoes = function(dominoes) {
    const PUSH_FORCE = 10**5;
    let forces = new Array(dominoes.length).fill(0);
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] == 'R') {
            i = pushToRight(i) - 1;
        }    
    }    
    for (let i = dominoes.length-1; i >= 0; i--) {
        if (dominoes[i] == 'L') {
            i = pushToLeft(i) + 1;
        }    
    }    
    
    return forces.map(char => {
        if (char == 0) return ".";
        else if (char > 0) return "R";
        else return "L";
    }).join("");
    
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
    // Helper Functions
    function pushToRight(idx) {
        let force = PUSH_FORCE;
        forces[idx] += force;
        force--, idx++;
        while (dominoes[idx] == '.' && idx < dominoes.length) {
            forces[idx] += force;
            force--;
            idx++;
        }
        return idx;
    }
    
    function pushToLeft(idx) {
        let force = PUSH_FORCE;
        forces[idx] -= force;
        force--, idx--;
        while (dominoes[idx] == '.' && idx >= 0) {
            forces[idx] -= force;
            force--;
            idx--;
        }
        return idx;
    }
};