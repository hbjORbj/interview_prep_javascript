/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image. 
*/

var floodFill = function(image, sr, sc, newColor) {
    if (image.length == 0 || image[sr][sc] === newColor) return image;
    let height = image.length, width = image[0].length;
    let ogColor = image[sr][sc];
    dfs(sr, sc);
    return image;
    
    function dfs(row, col) {
        if (row < 0 || row >= height || col < 0 || col >= width
           || image[row][col] !== ogColor) return;
        image[row][col] = newColor;
        const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
        for (let dir of DIRECTIONS) {
            dfs(row+dir[0], col+dir[1]);
        }
    }
    
    // We want to find a connected component starting from the given starting pixel that are composed of pixels that have the same color as the starting pixel.
    
    // Time Complexity: O(m*n), we possibly visit all nodes 
    // Space Complexity: O(m*n), call stack can possibly go as deep as the number of nodes (if every pixel has the same color as the starting pixel)
};

