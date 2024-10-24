javascript
// Declare a new variable “myGrade” and assign a number value from 0-100 to it.
let myGrade = 85; // You can modify this value to test your code

// Write an if/else-if/else statement that displays the letter grade using console.log(...)
if (myGrade >= 90) {
    console.log("A");
} else if (myGrade >= 80) {
    console.log("B");
} else if (myGrade >= 70) {
    console.log("C");
} else if (myGrade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// Modify the value inside of “myGrade” to test your code
myGrade = 72; // Change this value to test different scenarios

// Write a switch statement that does the same thing as the if/else-if/else statement above
switch (true) {
    case (myGrade >= 90):
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
}
// Which do you prefer? Why?
// The if/else-if/else statement is more straightforward for checking ranges, but the switch statement can be cleaner for specific values.

// Write a for loop that prints all values from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Modify your for loop to make it output an exclamation point for all odd numbers instead of the number.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("!");
    } else {
        console.log(i);
    }
}
