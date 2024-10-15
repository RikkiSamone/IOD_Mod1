//Unit Testing

//this function returns the sum of two numbers
function sum(a, b){
}
//the test
if (sum(10, 5) != 15) { error } 
if (sum(1000, 3000) != 4000) { error }
if (sum(0, 0) != 0) { error }

//the code 
function sum(a, b) {
    return a + b;
}


//this  function returns the difference of two numbers
function subtract(a, b){
}

//the tests
if (subtract(20, 15) != 5) { error }
if (subtract(20, 20) != 0) { error }
if (subtract(19, 21) != -2) { error }


//the code
function subtract(a, b) {
    return a - b;
}

//this function returns the product of two numbers
function multiply(a, b) {
}

//the tests
if (multiply(100, -30) != -3000) { error }
if (multiply(1, 0) != 0) { error }
if (multiply(500000, 1) != 500000) { error }


//the code
function multiply(a, b){
  return a * b;
}

//this function returns the quotient of two numbers
function divide(a, b) {
}

//the tests
if (divide(100, 1) != 100) { error }
if (divide(8, 2) != 4) { error }
if (divide(100, 25) != 4) { error }

//the code
function divide(a, b){
return a / b;
}

//Prints
console.log(sum(10, 5));
console.log(sum(1000, 3000));
console.log(sum(0, 0));
console.log(subtract(20, 15));
console.log(subtract(20, 20));
console.log(subtract(19, 21));
console.log(multiply(100, -30));
console.log(multiply(1, 0));
console.log(multiply(500000, 1));
console.log(divide(100, 1));
console.log(divide(8, 2));
console.log(divide(100, 25));