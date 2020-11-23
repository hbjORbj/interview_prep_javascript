/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Questions to ask:
1. Can the input number be zero? If so, what should I return for zero?
- The input number will always be greater than zero.
2. Is 1 considered a perfect square?
- Yes.
*/
function isPerfectNumber(num) {
    let left = 1, right = num, mid;
    while (left <= right) {
        // the loop continues until left <= right instead of left < right 
        // because I want to check the last number left as well. 
        // left < right does not check the last element.
        mid = Math.floor((left+right) / 2);
        if (mid**2 > num) right = mid-1;
        else if (mid**2 < num) left = mid+1;
        else break;
    }
    return mid**2 == num;
}

/*
Test Cases: 
9 => true ([1,2,3,4,5,6,7,8,9] -> implicit array)
1 => true ([1] -> implicit array)

Idea:
1. I will use binary search to find the square root of the input number.
Therefore, I will create three pointers, left, right and mid.
left is initialised to 1 since it is the first possible answer and right is initialised to the given number because
it is the last possible answer. (ex, 1). mid (which represents the median) is computed by adding left and right and dividing it by 2.

Three Cases to consider:
a. If the square of median is greater than input number, we need to search numbers less than this median, so we set right to mid-1.
b. If the square of median is less than input number, we need to search numbers greater than this median, so we set left to mid+1.
c. If the square of median is equal to the input number, we have found the square root, so we break the while loop.

2. If the square of mid is equal to the input number, return true because 
the fact that we have found the square root means that the input number is a perfect square.
Else, return false.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/

