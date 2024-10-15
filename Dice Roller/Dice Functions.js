//Function Breakdown for Dice Roller
//XdY; x- number of dice we have; y - dice type (2d6); (7d10); (1d20)

//Function that rolls 1 die (1d6)
//d - dice; y - how many sides the die will have | generate a random number between 1 and y; so my dice can have any number of sides > 1
function d(y) { 
    return Math.floor(Math.random() * y) + 1; //randomizes the number between 0 and not 1; generates a random string of decimals for d(y); Math.floor will remove the decimal for a random number between 0 and not 1. Note Math.random will never return 1; so add 1 to allow 1 to be randomized. (If zero, is randomly plus 1; will roll a 1 and never a zero; since die don't have a zero.)
    
}

//Function that rolls multiple dice (2d6)
//make a results array that will call d(y) x amount of times and put in results [rolling multiple d6]
function XdY(x, y) {
    let results = []
    do {
        results.push(d(y));  //.push - adds an element to the end of an array. so we want this pushed into the results array, push d(y) so it calls that x number of times. 
        
    } while (results.length < x) //do, while loop will run the code first, chck if it's true - if it is - run the loop again, (run - check - run)
    return results;

} 



//Function that allows a pool of dice (2d6 + 5d10)
//{Y:X} - can't do X:Y because the key has to be unique. So 2d6 + 2d8, one of the keys would override the other, so dice sides (Y) will be the unique key. (6:2, 8:2 | (6:X, 8:X) with 6 and 8 as the die sides, allows all the keys to be unique.
const poolTest = { 6: 2, 8: 2, 10: 7, 20 : 1 
}
 //make result object instead of array becuse the results will be an object like the const Pooltest; and the results will be pulling from an array; (see let results function)
 //calll XdY fir each entry in the object and return the results object. 

function dicePool(obj) {   
    let results = {};

    for (let [y, x] of Object.entries(obj)) {             //will give a key value pair of an array. So instead of 6Y : 2X, it will (6,2).
        results[y] = XdY(x, y); 
    }
    return results;
}
