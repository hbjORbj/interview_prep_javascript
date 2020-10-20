/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 

n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 

Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Questions to ask:
1. We need at least two elements to form a container since we need two vertical lines for a container, right?
- Yes.
*/
function mostWater(heights) {
    let l = 0, r = heights.length-1;
    let max = 0;
    while (l < r) {
        let container = (r-l)*Math.min(heights[l], heights[r]);
        max = Math.max(max, container);
        (heights[l] < heights[r]) ? l++ : r--
    }
    return max;
}

/*
Test Cases: [3, 5, 3, 2, 8, 10] => 20 (from index 1 to index 5)

Idea:
1. Initialise two pointers l and r, pointing to zero and nums.length-1.
2. Initiate a while loop. Inside the while loop, get the current container with current l and r positions and update
the maximum container, and then compare the height at l and the height at r and move the pointer that is pointing to a smaller height
because we want to maximise our container and therefore move to look for a bigger height.
3. Repeat step 2 until l equals r.

Category: Two Pointer
*/