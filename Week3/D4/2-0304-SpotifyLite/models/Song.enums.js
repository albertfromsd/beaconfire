const SongGenreEnums = {
    Country: "Country",
    Jazz: "Jazz",
    HipHop: "Hip Hop",
    RnB: "RnB",
    Folk:"Folk",
    Classical: "Classical",
    Electronic: "Electronic",
    Reggae: "Reggae",
    Rock: "Rock",
    Latin: "Latin",
    Disco: "Disco",
    Unknown: "Unknown"
};
const SongGenreEnumsArray = [...Object.values(SongGenreEnums)];

const SongLanguageEnums = {
    English: "English",
    Spanish: "Spanish",
    Portugese: "Portugese",
    Italian: "Italian",
    Korean: "Korean",
    Mandarin: "Mandarin",
    French: "French",
    Russian: "Russian",
    Arabic: "Arabic",
    Unknown: "Unknown"
}
const SongLanguageEnumsArray = [...Object.values(SongLanguageEnums)];

module.exports = { 
    SongsGenreEnums, 
    SongsGenreEnumsArray, 
    SongLanguageEnums, 
    SongLanguageEnumsArray 
};