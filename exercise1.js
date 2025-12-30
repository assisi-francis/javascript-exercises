// 1. Declare three variables: firstName, lastName, and age. Assign them appropriate values and print a sentence like "My name is John Doe and I am 25 years old."

let firstName = "John";
let lastName = "Doe";
let age = 25;

console.log("My name is " + firstName + " " + lastName + " and I am " + age + " years old."); 


// 2. Create two variables num1 and num2 with values 15 and 8. Calculate and print their sum, difference, product, and quotient.
let num1 = 15;
let num2 = 8;

console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));


// 3. Declare a variable temperature with value 22. Write an if-else statement that prints "It's cold" if temperature is less than 20, otherwise print "It's warm".

let temperature = 22;
if (temperature < 20) {
    console.log("It's cold");
} else {
    console.log("It's warm");
}


// 4. Create a variable price with value 50 and another variable discount with value 10. Calculate the final price after discount and print it.
let price = 50;
let discount = 10;
let finalPrice = price - discount;

console.log("Final price after discount: " + finalPrice);


// 5. Declare a variable number with any value. Write code to check if the number is positive, negative, or zero, and print the result.
let number = 10;

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}
