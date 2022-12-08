
// Group Anagrams

// Question Resources

// Question Description
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.


// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
// Example 1:
//   Input: strs = ["eat","tea","tan","ate","nat","bat"]
//   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
//   Input: strs = [""]
//   Output: [[""]]

// Example 3:
//   Input: strs = ["a"]
//   Output: [[“a"]]

/*
    
    output: each element from the input will be included in output
        if a word has no matching anagram, it will be included in an array of length 1

    approach 1:
        iterate over each word in the array
            instantiate a hashmap to track the number of characters in each word
        
        initialize an empty array
            iterate over the array again to check for words that have the same key:values as the outer loop's word
            have to remove the outer loop word and any matching words from the subject array to avoid inserting any word into the output array more than once

        problems: will not work for empty strings, and too heavy on runtime

    approach 2:
        compare strings directly against each other

        // can i compare the strings against each other without iterating multiple times?...
            // set?
            // sort string???
    

*/

function groupAnagrams(strs) {
    const strsCopy = strs.map( str => str.split('').sort().join('') );
    const outputArr = [];
    
    for( let i = 0; i < strsCopy.length; i++ ) {
        const baseStr = strsCopy[i];
        if( baseStr === null ) continue;
        
        const tempArr = [ strs[i] ];
        strsCopy[i] = null;

        for( let j = 1; j < strsCopy.length; j++ ) {
            if( baseStr !== strsCopy[j] ) continue;
            tempArr.push(strs[j]);
            strsCopy[j] = null;
        }

        outputArr.push( tempArr );
    }

    return outputArr;
    
}

function groupAnagrams2(strs) {
    let table = {};

    for(let i of strs) {
        let key = i.split('').sort(). join('')
        if(!table[key]) table[key] = [i];
        else table[key].push(i);
    }
    return(Object.values(table))
}

const test1 = ["eat","tea","tan","ate","nat","bat"]; // [["bat"],["nat","tan"],["ate","eat","tea"]]
const test2 = [""]; // [ [""] ]
const test3 = ["a"]; // [ ["a"] ]

// console.log(groupAnagrams(test1))
// console.log(groupAnagrams(test2))
// console.log(groupAnagrams(test3))

console.log(groupAnagrams2(test1))
console.log(groupAnagrams2(test2))
console.log(groupAnagrams2(test3))