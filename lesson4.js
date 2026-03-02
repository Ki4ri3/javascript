// Functions with Parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be reusable throughout a program.


function greeting(name){
    console.log("Hello ",name,"How are you?")
}

greeting("Kiarie Lewis")
greeting("William Kasongo")
greeting("Doubting Thomas")

console.log("===================================================================")
function addition(number1,number2){
    sum = number1 + number2
    console.log("The sum ot the numbers is: ",sum)
}

addition(45,60)

console.log("===================================================================")
// 
let half = 0.5
function trianglearea(base,height){
    area = (base * height * half)
    console.log("The area of the triangle is: ",area)
}
trianglearea(20,12)

// Find the simple interest given the principle as 5000,rate as 5% and time as 8 years.
function simpleinterest(principle,rate,time){
    simpleinterest = (principle * rate * time)
    console.log("The simple interest is: ",simpleinterest,"USD.")
}

simpleinterest(5000,5,8)