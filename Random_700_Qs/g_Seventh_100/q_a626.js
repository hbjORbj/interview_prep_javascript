/*
Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

Given a rectangular cake with height h and width w, 

and two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i]

is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, verticalCuts[j]

is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. 

Since the answer can be a huge number, return this modulo 10^9 + 7.
*/

/*
Vertical boundary affects the width
Horizontal boundary affects the height

1. We will get max height and max width separately.
2. Sort vertical boundaries in ascending order.
3. Iterate through vertical boundaries from start. At every boundary i, we will get
new width between previous boundary and current boundary. We update maxWidth if necessary.
Important thing to note here is that we should consider the sides of rectangle as boundaries
as well (that means 0 and w).
Hence, we add w to verticalCuts because it is a vertical boundary.
4. Do step 2 and 3 for horizontal boundaries and get maxHeight.
5. Return maxWidth * maxHeight.
*/
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let M = Math.pow(10, 9) + 7;
  verticalCuts.push(w);
  horizontalCuts.push(h);
  verticalCuts.sort((a, b) => a - b);
  horizontalCuts.sort((a, b) => a - b);
  let maxWidth = 0;
  let maxHeight = 0;
  for (let i = 0; i < verticalCuts.length; i++) {
    let newWidth =
      i > 0 ? verticalCuts[i] - verticalCuts[i - 1] : verticalCuts[i];
    maxWidth = Math.max(maxWidth, newWidth);
  }
  for (let i = 0; i < horizontalCuts.length; i++) {
    let newHeight =
      i > 0 ? horizontalCuts[i] - horizontalCuts[i - 1] : horizontalCuts[i];
    maxHeight = Math.max(maxHeight, newHeight);
  }
  return (maxWidth * maxHeight) % M;
  // T.C: O(Mlog(M) + Nlog(N)), M = length of horizontalCuts and N = length of verticalCuts
  // S.C: O(1)
};
