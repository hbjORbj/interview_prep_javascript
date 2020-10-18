/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.
*/

function lengthOfLastWord(s) {
    let words = s.split(" ");
    for (let i = words.length-1; i >= 0; i--) {
        if (words[i] !== '') return words[i].length;
    }
    return 0;
}

/*
Idea: I will split the string with a space between, e.g. String.split(" "), so the resulting array will contains
words and possibly some empty spaces, e.g. ''. So, I will loop over the array from the end and return the length of 
the element if it is not equal to empty space.
*/