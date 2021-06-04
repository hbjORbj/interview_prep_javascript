/*
Flood Fill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

var floodFill = function (image, sr, sc, newColor) {
  if (image.length === 0 || image[0].length === 0) {
    return [];
  }
  let ogColor = image[sr][sc];
  if (ogColor !== newColor) {
    dfs(image, sr, sc, ogColor, newColor);
  }
  return image;
  // T.C: O(M*N)
  // S.C: O(M*N)
};

function dfs(image, row, col, ogColor, newColor) {
  if (!validIdx(image, row, col) || image[row][col] !== ogColor) {
    return;
  }
  image[row][col] = newColor;
  for (let [newRow, newCol] of directions(row, col)) {
    dfs(image, newRow, newCol, ogColor, newColor);
  }
}

function validIdx(image, row, col) {
  return row >= 0 && col >= 0 && row < image.length && col < image[0].length;
}

function directions(row, col) {
  return [
    [row - 1, col],
    [row, col + 1],
    [row + 1, col],
    [row, col - 1],
  ];
}
