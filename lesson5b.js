// Arrow functions with parameters.

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are well.")
}
greet("Kiarie");
greet("Joseph");


console.log("====================================================")
// Example 2
// Below is the function to find the area of a circle
const CircleArea = (pi, radius) =>{
    let area = pi * (radius ** 2)
    console.log("The area of the circle is: ", + area + "cm\u00B2")
}
CircleArea(22/7,21);
CircleArea(22/7,42);

console.log("====================================================")
// Example 3
const simpleinterest = (principle,rate,time) =>{
    let simpleinterest = principle*rate*time/100
    console.log("The simple interest is "+simpleinterest+"USD.")
}
simpleinterest(20000,14,5)
simpleinterest(5000,8,20)
