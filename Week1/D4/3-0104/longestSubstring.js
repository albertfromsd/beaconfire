// . Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Implement a basic UI where users may type the inputs to your function and click submit.
// - This takes the user input, passes it as arguments to your function, and calculates the output.
// - This output should be displayed on the webpage dynamically.

// Example 1:
//  Input: s=‘abcabcbb’
//  Output: 3
//  Explanation: The answer is "abc", with the length of 3.

// Example 2:
//  Input: s=‘bbbbbb’
//  Output: 1
//  Explanation: The answer is "b", with the length of 1.

// Example 3:
//  Input: s=‘pwwkew’
//  Output: 3
//  Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a
// substring, "pwke" is a subsequence and not a substring.

/*  [ Notes]
     - originally tried to implement sliding window using a hashmap to track last known index, but it was failing too many random test cases
     - realized that the last index is not what is important in solving this problem
        - pivoted the use of the hashmap to start tracking number frequencies instead
*/
// sliding window using hashmap as counter
function findLongestSubstring( str ) {
    if( str.length < 2 ) return str.length;

    const charCounter = {};
    let left = 0, longestL = 1;

    for( let right=0; right<str.length; right++ ) {
        let rightChar = str[right];
        charCounter[rightChar] = charCounter[rightChar]+1 || 1;

        while( charCounter[rightChar] > 1 ) {
            let leftChar = str[left];
            charCounter[leftChar]--;
            
            left++;
        }
        longestL = Math.max(right-left+1, longestL);
    }

    // memory: O(1), where n is the number of unique characters in the string. with the maximum possible unique characters being 128
    // runtime: O(n^2), as in a worst case scenario, each letter could trigger the nested loop, iterating over each character again
    return longestL;
};

const test1 = 'abcabcbb'; // 3
const test2 = 'bbbbbb'; // 1
const test3 = 'pwwkew'; // 3
const test4 = 'abcde'; // 5
const test5 = 'a'; // 1
const test6 = 'tmmzuxt'; // 5

console.log( findLongestSubstring(test1) );
console.log( findLongestSubstring(test2) );
console.log( findLongestSubstring(test3) );
console.log( findLongestSubstring(test4) );
console.log( findLongestSubstring(test5) );
console.log( findLongestSubstring(test6) );



// [ ALTERNATE SOLUTION ] unique, high efficiency solution from another user on leetcode

// initialize fixed length array to represent all possible characters via ASCII codes
let lengthOfLongestSubstring = (str, map = Array(128).fill(-1), ans = 0) => {
    for (let i = 0, last = -1; i<str.length; i++) { // initialize last = -1 to compensate for length of 1 at index 0, and avoid actual possible indices
        let char = str[i].charCodeAt(0); // use charcode to reference index in map array instead of using hashmap
        last = Math.max(last, map[char]); // compare the index of the last occurrence of the char to current index
        ans = Math.max(ans, i-last); // compare and store longest length
        map[char] = i; // store the index of this occurrence of this character
    }

    // memory: O(1), as this solution will always use an array of the same fixed length, and single value variables
    // runtime: O(n), where n is the number of characters in the string
    return ans;
};

// console.log( lengthOfLongestSubstring(test1) );
// console.log( lengthOfLongestSubstring(test2) );
// console.log( lengthOfLongestSubstring(test3) );
// console.log( lengthOfLongestSubstring(test4) );
// console.log( lengthOfLongestSubstring(test5) );
// console.log( lengthOfLongestSubstring(test6) );
