// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

var angleClock = function(hour, minutes) {
    let hourAngle = (hour % 12)  * 30 + minutes * 0.5;
    // hour-hand rotates 30 degrees per hour and 0.5 degrees per minute
    let minuteAngle = minutes * 6;
    // minute-hand rotates 6 degrees Per minute
    
    let angle1 = Math.abs(hourAngle - minuteAngle);
    let angle2 = 360 - angle1;
    
    return Math.min(angle1, angle2);
    // Time Complexity: O(1)
    // Space Complexity: O(1)
};