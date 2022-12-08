// https://leetcode.com/problems/longest-palindrome/

// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

function longestPalindrome(s) {
    /*
        iterate through string
            use map to store all characters
        
        iterate through the map
            add even numers to the output answer
            if there is an odd number left, then we would add 1
    */
    if( s.length < 2 ) return s.length; // O(1)

    let result = 0; // O(1)
    const map = {}; // O(1)

    for( let i=0; i<s.length; i++ ) { // O(n)
        if( map[s[i]] ) map[s[i]]++;
        else map[s[i]] = 1;
    }

    for( let char in map ) { // O(n) 
        if( map[char] % 2 === 0 ) {
            result += map[char];
        } else if( map[char]-1  ) {
            result += map[char]-1
            map[char] = 1;
        }
    }
    
    
    for( let char in map ) { // O(n)
        if( map[char] % 2 === 1 ) {
            result++;
            break;
        }
    }
    
    // runtime: O(n)
    // space: O(n)
    return result;
}

const s0 = 'aaabbb' // 5
const s1 = "abccccdd"; // 7
const s2 = "a"; // 1
const s3 = "bananas"; // 5
const s4 = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
const s5 = 'ccc'; // 3

console.log( longestPalindrome(s0) );
console.log( longestPalindrome(s1) );
console.log( longestPalindrome(s2) );
console.log( longestPalindrome(s3) );
console.log( longestPalindrome(s4) );
console.log( longestPalindrome(s5) );
