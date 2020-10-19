/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.

For numbers which are multiples of both three and five output “FizzBuzz”.
*/

function fizzBuzz(n) {
    let res = [];
    for (let i = 1; i <= n;  i++) {
        if (i % 3 == 0 && i % 5 == 0) res.push("FizzBuzz");
        else if (i % 3 == 0) res.push("Fizz");
        else if (i % 5 == 0) res.push("Buzz");
        else res.push(i.toString());
    }
    return res;
}

/*
Test Cases: 15 => ["1","2","Fizz","4","Buzz",...."14","FizzBuzz"]

Idea:
1. Loop over every number from 1 to n, and push it as a string to return array. If it is a multiple of both three and five,
push "FizzBuzz", a multiple of 3 "Fizz" and a multiple of 5 "Buzz".

Time Complexity: O(n)
Space Complexity: O(1) - No extra space used except for output. Answer array is required so it isn't part of the algorithms complexity. 
*/