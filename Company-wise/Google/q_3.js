/*
Q.1 Given an array of integers and a number m. We can create m subarrays using the input array.

The max sum of each subarrays out of each possibilities are taken. Return the minimum number out of them.

Array can contain negative values.

Eg: [1 3 9 2 7 8]
m=2

Possibilities------Sum---Max
[1] [3 9 3 7 8]--- 1, 30----30
[1 3][ 9 2 7 8]--- 4, 27----27
[1 3 9][ 2 7 8]---13, 17----17
[1 3 9 2][ 7 8]---15, 15----15
[1 3 9 2 7][ 8]---22, 8----22

answer: 15 (as 15 is min of the all maximum sums)
*/
