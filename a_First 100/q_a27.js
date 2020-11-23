/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even though they consist of same characters.
*/
 

/*
Test Cases: "abbac" => 7 [a,b,b,a,c,bb,abba]
*/

/*
Idea:
First, I will figure out when a palindrome is possible.
1. Every letter occurs an even number of times
2. Every letter except only one occurs an even number of times

We start by initialising two pointers l and r.
We expand r pointer and every time a palindrome is "possible" we check if it is palindrome
*/