/*
======================
CONDITIONAL STATEMENTS
======================

Conditional statements allow you to create decision-making statements in your code.

*/

/*
==================
IF/ELSE STATEMENTS
==================

The if statement is used to test a condition,
if the condition is true, the code inside the if block will be executed. 
If the condition is false, the code inside the else block will be executed.
*/

// Declare the variable first

let x = 5;

//The if/else statement comes in here after the variable has been declared

if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}


// Declare another variable

let y = 4;

// We would use the if/else if/else statements here.

if (y > 10) {
  console.log("y is greater than 10");
} else if (y > 5) {
  console.log("y is greater than 5 but less than or equal to 10");
} else {
  console.log("y is less than or equal to 5");
}


/*
================
SWITCH STATEMENT
================
The switch statement is used to test a variable against a series of values, 
and execute different code blocks depending on the value of the variable.
*/

// Declare your variable first using the 'let' keyboard
let fruit = "apple";

// The switch statement selects the stored variable as a method and apply the case to store and out a new variable

switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "banana":
    console.log("This is a banana");
    break;
  case "orange":
    console.log("This is an orange");
    break;
  default:
    console.log("This is not an apple, banana, or orange");
}

