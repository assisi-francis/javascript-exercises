//16. Create a variable character with value "A". Write code to check if it's an uppercase letter, lowercase letter, or neither (you can assume it's a single character). Print the result.
let character = "A";

if (character >= 'A' && character <= 'Z') {
    console.log(character + " is an uppercase letter.");
} else if (character >= 'a' && character <= 'z') {
    console.log(character + " is a lowercase letter.");
} else {
    console.log(character + " is neither an uppercase nor a lowercase letter.");
}

//17.  Write code with variables age (value 25) and hasLicense (value true). A person can drive only if they are 18 or older AND have a license. Print whether they can drive or not.
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("The person can drive.");
} else {
    console.log("The person cannot drive.");
}


//18. Create a variable totalAmount with value 1000 and isMember with value true. If the person is a member, apply a 20% discount, otherwise 5% discount. Calculate and print the final amount
let totalAmount = 1000;
let isMember = false;

if (isMember) {
    totalAmount *= 0.8;
} else {
    totalAmount *= 0.95;
}

console.log("The final amount is: " + totalAmount);


//19. Write code with a variable number (value 15). Print all numbers from 1 to that number, but only print numbers divisible by 3.
let number = 2;
for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//20. Create variables hour (value 14) representing time in 24-hour format. Write code that prints "Good morning" (5-11), "Good afternoon" (12-17), "Good evening" (18-21), or "Good night" (22-4).
let hour = 14;

if (hour >= 5 && hour <= 11) {
    console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour <= 21) {
    console.log("Good evening");
} else {
    console.log("Good night");
}
