/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits. 
*/

var subtractProductAndSum = function(n) {
    let product = 1, sum = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        product *= lastDigit;
        sum += lastDigit;
        n = Math.floor(n / 10);
    }
    return product - sum;
};

// Time Complexity: O(n)
// Space Complexity: O(1)