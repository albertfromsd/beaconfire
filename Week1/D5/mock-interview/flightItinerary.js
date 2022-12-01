// Question Name
// Flight Itinerary
// Question Resources
// Question Description
// Given an array of objects, find and output the flight itinerary. You can assume there are no loops, so there is only 1 valid itinerary. The output is just the airport terminals in order (start to next to next ... to end), separated by ->

// Example 1: 
// Input: [
//   { start: 'LAX', end: 'JFK' },
//   { start: 'JFK', end: 'ATL' },
//   { start: 'ATL', end: 'SFO}
// ]
// Output: "LAX -> JFK -> ATL -> SFO"

// Example 2:
// Input: [
//   { start: "CLT", end: "EWR"},
//   { start: "EWR", end: "PHX"},
//   { start: "SEA", end: "LAS"},
//   { start: "LAS", end: "CLT"}
// ]
// Output: "SEA -> LAS -> CLT -> EWR -> PHX"

/*
 
    no loops = no visited map needed
    output: array with path of each airport

    brute force:
    iterate through array:
        create 2 sets, 1 for each start/end ports
            if a start city is not present in the 'end' set, mark it as the starting port
            if an end city is not present in the start set, mark it as the end point
            then iterate through the array following the path
    
    number of ports will be length of array+1
        can initialize an array with a fixed length to fill in blanks

 */

function findFlightItinerary( flights ) {
    const startPorts = new Set();
    const endPorts = new Set();
    const outputArr = new Array(flights.length+1).fill(false);

    for( const flight of flights ) {
        const {start, end } = flight;

        startPorts.add(start);
        endPorts.add(end);
    }

    startPorts.forEach( port => {
        if( !endPorts.has(port) ) outputArr[0] = port;
    } ) 

    endPorts.forEach( port => {
        if( !startPorts.has(port) ) outputArr[flights.length] = port;
    } )

    for( let i=0; i<outputArr.length; i++ ) {
        for( let j=0; j<flights.length; j++ ) {
            if( flights[j].start === outputArr[i] ) outputArr[i+1] = flights[j].end;
        }
    }

    //memory: worst case of O(2(n-1)) where n is the number of airports, simplified to linear O(n)
    //runtime: worst case of O(n + (n^2) ), where n is the number of unique airports, simplified to quadratic O(n^2)
    //possible optimizations: 
        // use two hashmaps to store start points separately from end points to help speed up the look up of connecting flights
        // could reduce memory via cutting otu the need for two sets, storing double the input size
        console.log(outputArr); 
        return outputArr; 
}

function findFlightItineraryAgain( flights ) {
    /*
    iterate through array, to create hashmap of start: end key: value pairs
    
    simultaneously need to track the frequency of the endpoints
        if by end of iteration, a map[start][1] = 0, that key is the start point


    still need to figure out start/end points
    */
    const outputArr = [];
    const flightMap = {};
    const endMap = {};
    const destinationSet = new Set();
    for( const flight of flights ) {
        const {start, end} = flight;

        // if we create the flight path backwards, it may make it easier 
        flightMap[end] = start;

        // checking for start of flight path
        destinationSet.add(start);
        destinationSet.delete(end);
    }

    destinationSet.forEach( port => {
        console.log(port);
        outputArr.push( port );
    } )

    console.log({flightMap});
    return outputArr;
}

const test1 = [
  { start: 'LAX', end: 'JFK' },
  { start: 'JFK', end: 'ATL' },
  { start: 'ATL', end: 'SFO' }
]
// Output: "LAX -> JFK -> ATL -> SFO"


const test2 = [
  { start: "CLT", end: "EWR"},
  { start: "EWR", end: "PHX"},
  { start: "SEA", end: "LAS"},
  { start: "LAS", end: "CLT"}
]
// Output: "SEA -> LAS -> CLT -> EWR -> PHX"

// findFlightItinerary(test1);
// console.log('.')
// findFlightItinerary(test2);

findFlightItineraryAgain(test1);
console.log('.')
findFlightItineraryAgain(test2);