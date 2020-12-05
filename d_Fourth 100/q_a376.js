/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.
*/

var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g,"").length;
};

// We want to find two bits to be different so we need XOR
// 000 XOR 111 => 111