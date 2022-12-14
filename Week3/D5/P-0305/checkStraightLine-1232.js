https://leetcode.com/problems/check-if-it-is-a-straight-line/

// 1232. Check If It Is a Straight Line
// Easy
// 1.2K
// 170
// Companies
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

function checkStraightLine( coordinates ) {
    const xDelta = coordinates[1][0] - coordinates[0][0];
    const yDelta = coordinates[1][1] - coordinates[0][1];
    const delta = xDelta / yDelta;

    for( let i = 2; i < coordinates.length; i++ ) {
        let xChange = coordinates[i][0] - coordinates[i-1][0];
        let yChange = coordinates[i][1] - coordinates[i-1][1];
        let currChange = xChange/yChange;

        if( !yDelta && yChange || yDelta && delta !== currChange) return false;
    }

    return true;
}

const c1 = [[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]; // 
const c2 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]; //
const c3 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]; //
console.log( checkStraightLine(c1) );
console.log( checkStraightLine(c2) );
console.log( checkStraightLine(c3) );