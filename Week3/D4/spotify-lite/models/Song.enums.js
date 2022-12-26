function getRandomInt( min=1, max=100 ) {
    return Math.floor( (Math.random()*(max-min) + min) );  
} 

const SongGenres = {
    Country: "Country",
    Jazz: "Jazz",
    HipHop: "Hip Hop",
    RnB: "R&B",
    Folk:"Folk",
    Classical: "Classical",
    Electronic: "Electronic",
    Reggae: "Reggae",
    Rock: "Rock",
    Latin: "Latin",
    Disco: "Disco",
    NA: "N/A"
};
SongGenres.toArray = function() {
    return Object.values(this).filter( val => typeof val === 'string' );
};
SongGenres.random = function() {
    const enumsArr = this.toArray();
    const idx = getRandomInt(0, enumsArr.length);
    return enumsArr[idx];
}
// const SongGenreEnumsArray = [...Object.values(SongGenres)];

const SongLanguages = {
    English: "English",
    Spanish: "Spanish",
    Portugese: "Portugese",
    Italian: "Italian",
    Korean: "Korean",
    Mandarin: "Mandarin",
    French: "French",
    Russian: "Russian",
    Arabic: "Arabic",
};
SongLanguages.toArray = function() {
    return Object.values(this).filter( val => typeof val === 'string' );
};
SongLanguages.random = function() {
    const enumsArr = this.toArray();
    const idx = getRandomInt(0, enumsArr.length);
    return enumsArr[idx];
};



// const SongLanguageEnumsArray = [...Object.values(SongLanguageEnums)];

module.exports = { 
    SongGenres,
    SongLanguages,
};