// https://leetcode.com/problems/ugly-number/

// 263. Ugly Number
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Example 1:
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Example 3:
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 
// Constraints:
// -231 <= n <= 231 - 1

function isUgly(n) {

/*
    edge cases:
    if n <= 0 return false
    if n === 1 return true
    2, 3, 5 would return true
    
    while loop: n > 5 
        if n%2 = 0
            n = n/2
        else if n%3 = 0
            n = n/3
        else if n%5 = 0
            n = n/5
        else
            return false

    return true
*/
    if( n <= 0 ) return false;
    if( n === 1 ) return true;

    while( n > 5 ) {
        if( n % 2 === 0 ) n /= 2;
        else if( n % 3 === 0 ) n /= 3;
        else if( n % 5 === 0 ) n /= 5;
        
        else return false;
   }

   return true;
};

const n1 = 6; // true
const n2 = 1; // true
const n3 = 14; // false
const n4 = 15; // true
const n5 = 27; // true
const n6 = 101; // false
const n7 = 30; // true

console.log( isUgly(n1) );
console.log( isUgly(n2) );
console.log( isUgly(n3) );
console.log( isUgly(n4) );
console.log( isUgly(n5) );
console.log( isUgly(n6) );
console.log( isUgly(n7) );