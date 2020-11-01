/*
Q: You have a rectangle of width w and height h. You will start to draw boundaries. The number of boundaries is given by the length of the given array, distance. isVertical[i] represents whether or not i-th boundary is vertical or not. 1 means vertical and 0 means horizontal. distance[i] tells the distance between your boundary and the rectangle. In case of a horizontal boundary, it represents the distance from the bottom of your rectangle, and in case of a vertical boundary, it represents the distance from the left of your rectangle.

You need to return the largest areas of your rectangle as an array after drawing each of your boundaries.

ex) w = 4, h = 4, isVertical = [0,1], distance = [3,1]
After drawing the first boundary, the largest possible rectangle area is 12.
After drawing the second boundary, the largest possible rectangle area is 9.
You are not given a new rectangle for each boundary. You draw boundaries on the same rectangle.

You should return [12, 9].
*/

function largestArea(w, h, isVertical, distance) {
    if (isVertical.length !== distance.length) return null;
    if (w == 0 || h == 0) return 0;
    let areas = [];
    for (let i = 0; i < isVertical.length; i++) {
        if (isVertical[i] == 1) { // height stays the same
            w = Math.max(w-distance[i], distance[i]); // compare whether the width of boundary or the width of
                                                      // the remaining rectangle is greater
        } else { // width stays the same
            h = Math.max(h-distance[i], distance[i]); // compare whether the height of boundary or the height of
                                                      // the remaining rectangle is greater
        }
        areas.push(w*h);
    }
    return areas;
}

console.log(largestArea(4,4,[0,1],[3,1])); // => [12,9]
console.log(largestArea(10,4,[0,1,0],[3,1,2])); // => [30,27,18]
console.log(largestArea(2,2,[0,1],[1,1])); // => [2,1]
console.log(largestArea(3,5,[0,1],[1])); // => null
console.log(largestArea(0,1,[0,1],[1,1])); // => 0