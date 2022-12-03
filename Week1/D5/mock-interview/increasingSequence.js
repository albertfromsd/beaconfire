// Question Name
// Increasing Sequence
// Question Resources
// Question Description
// Given an array of numbers, return true/false based on whether you can delete at most 1 element and obtain a strictly increasing sequence.

// Example 1
//    Input: [1, 999, 998, 997]
//                 L        R
//    Output: false

// Example 2
//    Input: [2, 3, 6, 4, 5, 9]
//    Output: true

// Example 3
//    Input: [2, 2, 2]
//    Output: false

// test4 = [ 1, 9, 8, 10, 11, 12 ] 
// output: true

/*
    input: arr of numbers
    output: boolean

    empty array returns false
    same values does not fulfil increasing requirement

    iterate through array
        continue normally as long as current num is higher than previous num
        if current num < prev num, track it as a strike against the requirement
            save the prev num to compare against next number
            move pointers to the left of striked number + 1 (passing up the next number compared)
        
        if boolean switch triggers again, the array cannot fulfill the parameter
*/

function increasingSubsequence( nums ) {
    /* iterate over array
            once a rightNum is larger than a leftNum:
                compare right+1 to current leftNum
                    if rightNum is greater, slice the array from right+1, and repeat comparison
                        if another rightNum is found that is larger than leftNum, return false 
    */
   if( nums.length < 2 ) return false;
   let wasNumChanged = false;
    for( let i = 1; i < nums.length; i++ ) {
        if( nums[i-1] < nums[i] ) {
            continue;
        } else if( wasNumChanged ) {
            console.log( {nums} );
            return false;
        } else if( !wasNumChanged ) {
            nums[i-1] = nums[i-2];
            wasNumChanged = true;
        }
    }
    console.log({nums})
    return true;
}

        

const test1 = [1, 999, 998, 997]; //    Output: false
const test2 = [2, 3, 6, 4, 5, 9] //    Output: true
const test3 = [2, 2, 2] //    Output: false
const test4 = [ 1, 9, 8, 10, 11, 12 ] // output: true
const test5 = [105,924,32,968] // true
const test6 = [1, 2, 10, 5, 7]; // true
const test7 = [2, 3, 1, 2] // false

// console.log( increasingSubsequence(test1) );
// console.log( increasingSubsequence(test2) );
// console.log( increasingSubsequence(test3) );
// console.log( increasingSubsequence(test4) );
// console.log( increasingSubsequence(test5) );
console.log( increasingSubsequence(test6) );
console.log( increasingSubsequence(test7) );