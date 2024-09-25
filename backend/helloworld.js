//function subtract(a, b){
  //  return a - b;
//}

//function add(a, b){
    //return a + b;
//}

//function multiply(a, b){
    //return a * b;
//}

//function divide(a, b){
   // return a / b;
//}

//function helloWorld(name){
  //  return `Hello ${name}`;
//console.log(subtract(10, 5));
//console.log(add(10, 5));
//console.log(multiply(10, 5)); 
//console.log(divide (10, 5));
//console.log(helloWorld('Rikki'));
//console.log(add(15, 5)
//}
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Cats are stupid.');console.log(result);    // Score: -2, Comparative: -0.666


