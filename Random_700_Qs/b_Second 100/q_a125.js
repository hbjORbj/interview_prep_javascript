/*
Q: You have a rectangle of width w and height h. You will start to draw boundaries. The number of boundaries is given by the length of the given array, distance.

isVertical[i] represents whether or not i-th boundary is vertical or not. 1 means vertical and 0 means horizontal.

distance[i] tells the distance between your boundary and the rectangle. In case of a horizontal boundary, 

it represents the distance from the bottom of your rectangle, and in case of a vertical boundary, it represents the distance from the left of your rectangle.

You need to return the largest areas of your rectangle as an array after drawing each of your boundaries.

ex) w = 4, h = 4, isVertical = [0,1], distance = [3,1]
After drawing the first boundary, the largest possible rectangle area is 12.
After drawing the second boundary, the largest possible rectangle area is 9.
You are not given a new rectangle for each boundary. You draw boundaries on the same rectangle.

You should return [12, 9].
*/

/*
Vertical boundary affects the width
Horizontal boundary affects the height

maxArea[i] = maxWidth[i] * maxHeight[i]

maxWidth[i] = max width after drawing 0...i boundaries
maxHeight[i] = max height after drawing 0...i boundaries

All three arrays' lengths are given by the length of `distance`.
*/
function largestRectangle(w, h, isVertical, distance) {
  if (w === 0 || h === 0 || isVertical.length !== distance.length) {
    return [];
  }
  let n = distance.length;
  let maxArea = new Array(n);
  let maxWidth = new Array(n);
  let maxHeight = new Array(n);
  // get max width at each i
  for (let i = 0; i < n; i++) {
    if (isVertical[i]) {
    }
    // horizontal boundary doesn't affect width
    else {
      maxWidth[i] = maxWidth[i - 1];
    }
  }
  // get max height at each i
  for (let i = 0; i < n; i++) {
    if (!isVertical[i]) {
    }
    // vertical boundary doesn't affect height
    else {
      maxHeight[i] = maxHeight[i - 1];
    }
  }
  for (let i = 0; i < n; i++) {
    maxArea[i] = maxWidth[i] * maxHeight[i];
  }
  return maxArea;
}

console.log(largestRectangle(4, 4, [0, 1], [3, 1])); // => [12,9]
console.log(largestRectangle(10, 4, [0, 1, 0], [3, 1, 2])); // => [30,27,18]
console.log(largestRectangle(2, 2, [0, 1], [1, 1])); // => [2,1]
console.log(largestRectangle(3, 5, [0, 1], [1])); // => null
console.log(largestRectangle(0, 1, [0, 1], [1, 1])); // => 0
console.log(largestRectangle(5, 5, [0, 0], [3, 4])); // => [15, 15]
