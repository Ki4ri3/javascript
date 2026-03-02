// Program used to calculate bus fare per passenger in accordance to their travel distance.
let Distance = 1300;

if(Distance < 0){
    console.log("Please enter a reasonable travel distance!")
}
else if (Distance > 0 && Distance <= 100){
    console.log("Your total payment is 5 USD.")
}
else if (Distance > 100 && Distance <= 500){
    console.log("Your total payment is 10 USD.")
}
else if (Distance > 500 && Distance <= 1000){
    console.log("Your total payment is 20 USD.")
}
else {
    console.log("Your total payment is 40 USD.")
}

console.log("===================================================================")

// Task: Write a for loop to print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("===================================================================")

// Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("===================================================================")

// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is:", largest);
console.log("===================================================================")

// Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}
console.log("===================================================================")
// Write a for loop to print all the leap years from 2000-2026.
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}
console.log("===================================================================")
