/*
Robot Bounded In Circle

On an infinite plane, a robot initially stands at (0, 0) and faces north.

The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
*/

/*
If robot (1) comes back to origin OR (2) faces the north after instructions, the robot is in a circle.
Turn right -> i = (i + 1) mod 4, where DIRECTIONS[i] is the direction robot is facing
Turn left -> i = (i + 3) mod 4, DIRECTIONS[i] is the direction robot is facing

Key points:
1. Don't think about middle operations. Think about the start and the end only. We start at (0,0) and
end at (x,y). (a) If (x,y) is origin, we've come back to the origin. No matter where we end up facing, we'll
always come back to origin if we start at origin. (b) If (x,y) is not origin and robot is facing the north,
as we repeat instructions, robot will go to (2x,2y), (3x,3y) and so on. Hence, it is NOT in a circle. (c) If (x,y) is not origin and robot is facing a direction other than the north, it will come back to the origin. Why?
You can draw yourself to better understand but the basic idea is if its starting direction and ending direction
are different, it will change its direction by the same amount each time instructions are executed. Hence, robot will eventually come back to the origin. In fact, it will be back in 4 times of instructions at most.
*/
var isRobotBounded = function (instructions) {
  let x = 0,
    y = 0;
  // DIRECTIONS[i] = [x,y], from north to west
  let DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let i = 0;
  for (let j = 0; j < instructions.length; j++) {
    if (instructions[j] === "R") {
      i = (i + 1) % 4;
    } else if (instructions[j] === "L") {
      i = (i + 3) % 4;
    } else {
      x += DIRECTIONS[i][0];
      y += DIRECTIONS[i][1];
    }
  }
  return (x === 0 && y === 0) || i > 0;
  // T.C: O(N)
  // S.C: O(1)
};
