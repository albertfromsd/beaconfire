// fetch data
// sort array by a.state - b.state to display headers, set id to state namee
    // for each state, sort population with results.filter( item => item.state === statename ).sort( (a, b) => b.population - a.population ) 

let data;

fetchData('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then( res => res.json() )
    .then( res => {
        data = res.map( item => item.state.sort() )
    } )
    .catch(e => console.log(e))