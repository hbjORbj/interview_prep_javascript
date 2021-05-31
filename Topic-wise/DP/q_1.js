/*
Minimum Jumps to Reach Home

A certain bug's home is on the x-axis at position x. Help them get there from position 0.

The bug jumps according to the following rules:
- It can jump exactly a positions forward (to the right).
- It can jump exactly b positions backward (to the left).
- It cannot jump backward twice in a row.
- It cannot jump to any forbidden positions.

The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.

Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x,
return the minimum number of jumps needed for the bug to reach its home.

If there is no possible sequence of jumps that lands the bug on position x, return -1.
*/
