// https://leetcode.com/problems/isomorphic-strings/

// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true
 
// Constraints:
// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

function isIsomorphic( s, t ) {
    /*
        initialize a hashmap to track
        for loop through input string s
            if the entry doesn't exist, then create it
            if the entry does exist, we ignore it
        
        initialize variable string = s
        for loop through string s
            char = s[i]
            at index i, map[char] = i

        return s.join('') === t;
    */

    const sMap = {}; // iterate over s, to track characters of t
    const tMap = {}; // pushing values of t  so that we can check
    for( let i=0; i<s.length; i++ ) { // 
        const charS = s[i], charT = t[i];
        
        if( ( sMap[charS] && sMap[charS] !== charT) || ( tMap[charT] && tMap[charT] !== charS ) ) return false;
        
        
        sMap[charS] = t[i];
        tMap[charT] = s[i];
    }
    return true;
};

let s1 = "egg", t1 = "add";
const s2 = "foo", t2 = "bar";
const s3 ="paper", t3 = "title";
const s4 = "badc", t4 = "baba";
const s5 = "a", t5="a";

console.log(  isIsomorphic(s1, t1) ); // true
console.log(  isIsomorphic(s2, t2) ); // false
console.log(  isIsomorphic(s3, t3) ); // true
console.log(  isIsomorphic(s4, t4) ); // false