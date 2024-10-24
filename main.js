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
