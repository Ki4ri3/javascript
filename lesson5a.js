// Arrow Functions.
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern  way of defining functions in compact manner.
// At times the arrow function can be said to be anonymous functions. Why? =>Because they use the names of the variables they are contained in.


const sayHello = () => {
    console.log("This is an Arrow Function.")
}
sayHello();

console.log("===============================")
// 


const multiple = () => {
    let number1 = 10
    let number2 = 20
    let number3 = 5
    multiple = number1 * number2 * number3
    console.log("The answer is: ",multiple)
}
multiple();