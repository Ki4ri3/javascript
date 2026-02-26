// Program used to calculate bus fare per passenger in accordance to their travel distance.
let Distance = prompt("Enter the distance travelled here: ");

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
