//Making an Array//

let TVShows = ['The Office', 'Parks and Rec', 'Friends', 'Living Single', 'Attack on Titan'];
console.log(TVShows[0]);
console.log(TVShows[1]);
console.log(TVShows[2]);
console.log(TVShows[3]);
console.log(TVShows[4]);

//replacing elements with other elements//
TVShows[1] = 'Hospital Playlist'
TVShows[4] = 'This is Us'
console.log(TVShows);

//shift method = remove element from beginning of an array//
let firstTVShows = TVShows.shift();
console.log(firstTVShows);
console.log(TVShows);

//pop method - remove element from an end of an array//
let lastTVShows = TVShows.pop();
console.log(lastTVShows);
console.log(TVShows);

//unshift method - add a new element to the beginning of an array//
TVShows.unshift('Days');
console.log(TVShows);