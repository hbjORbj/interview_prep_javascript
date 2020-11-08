function biggestNecklace(A, N) {
    let visited = new Array(N).fill(false);
    let visiting = new Array(N).fill(false);
    let maxCount = 0;
    for (let i = 0; i < N; i++) {
        let bead = A[i];
        if (visited[bead] == false) {
            revolve(bead, 0);
        }
    }
    return maxCount;

    function revolve(bead, count) {
        maxCount = Math.max(maxCount, count); // update number of nodes in current revolution
        if (visiting[bead] == true) { // came back to the starting bead
            return;
        }
        visiting[bead] = true; // this bead is currently in revolving process
        let nextBead = A[bead];
        revolve(nextBead, count+1); // move to the next bead
        visited[bead] = true; //  this bead already had revolution
        visiting[bead] = false; // this bead is no longer in revolving process 
    }
}

console.log(biggestNecklace([5,4,0,3,1,6,2], 7))
console.log(biggestNecklace([1,2,3,0], 4))
console.log(biggestNecklace([0,1,2,3], 1))
console.log(biggestNecklace([], 0))

/*
Test Cases:
[5,4,0,3,1,6,2], 7 => 4
[1,2,3,0], 4 => 4 (there is n-beaded one necklace)
[0,1,2,3], 4 => 1 (there are one-beaded n necklaces)
[], 0 => 0

Time Complexity: O(N)
Space Complexity: O(N)
*/